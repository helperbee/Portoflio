https://leetcode.com/graphql?query=query
{recentSubmissionList(username:"kjunghoan") {
    title
    titleSlug
    timestamp
    statusDisplay
    status
    lang
    langName
    runtime
    url
    __typename
    }
    matchedUser(username: "kjunghoan"){
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
}