

//__typename

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
    
}

module.exports = {
    leetcodeGraphUrl
}