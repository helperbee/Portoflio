const axios = require('axios');

let leetcodeGraphUrl = (user) => {
    return `https://leetcode.com/graphql?query=query
    {recentSubmissionList(username:"${user}") {
        title
        titleSlug
        time
        timestamp
        statusDisplay
        status
        lang
        langName
        runtime
        url
        __typename
        }
        matchedUser(username: "${user}"){
          submitStats: submitStatsGlobal {
                        acSubmissionNum {
                          difficulty
                          count
                          submissions
                            __typename
                        }
                        totalSubmissionNum {
                          difficulty
                          count
                          submissions
                           __typename
                          }
                         __typename
            }
        }    
    }`;    
};

let leetcodeQuestionUrlBuilder = (questionList) => {
  //build a graph query to get question difficulties
  let url = "https://leetcode.com/graphql?query=query{";
  for(var question of questionList){
    url += `${question.title.replaceAll(' ', '')}: question(titleSlug: "${question.titleSlug}") {
                    questionId
                    questionFrontendId
                    title
                    titleSlug
                    difficulty
                
            }`;
  };
  return url + "}";
};

let leetcodeModified = async (questionList) => {
  let graphUrl = leetcodeQuestionUrlBuilder(questionList);
  try{
    let difficulties = await axios.get(graphUrl);
    for(let x = 0; x < questionList.length; x++){
      let title = questionList[x].title.replaceAll(' ', '');
      questionList[x]['difficulty'] = difficulties.data.data[title].difficulty || 'Easy';      
    }    
  }catch(error){
    console.log(error);
  }finally{    
    return questionList;
  }
};

let gitRepos = () => {//could just use authenticated user
  return axios.get(`https://api.github.com/users/${process.env.GITUSER}/repos`, {headers:{
    Authorization: `Bearer ${process.env.GIT}`
  }});  
};

let gitContributions = () => {
  return axios.get(`https://api.github.com/users/${process.env.GITUSER}/events`, {headers:{
    Authorization: `Bearer ${process.env.GIT}`
  }});
};

let getReposWithRecentPush = async () => {
  try {
    const [reposResponse, contributionsResponse] = await Promise.all([
      gitRepos(),
      gitContributions()
    ]);

    const repos = reposResponse.data;
    const contributions = contributionsResponse.data.filter(event => event.type === 'PushEvent');
    const repoPushTimestamps = {};
    contributions.forEach(event => {
      const repoName = event.repo.name;
      const eventTimestamp = new Date(event.created_at).getTime();
      if (!repoPushTimestamps[repoName] || eventTimestamp > repoPushTimestamps[repoName]) {
        repoPushTimestamps[repoName] = eventTimestamp;
      }
    });
    repos.sort((a, b) => {
      const timestampA = repoPushTimestamps[a.full_name] || 0;
      const timestampB = repoPushTimestamps[b.full_name] || 0;
      return timestampB - timestampA;
    });

    return repos;
  } catch (error) {
    console.error('Error fetching and sorting repositories:', error);
    return [];
  }
};

module.exports = {
    leetcodeGraphUrl,
    leetcodeModified,
    getReposWithRecentPush
}