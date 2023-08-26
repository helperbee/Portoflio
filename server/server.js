require('dotenv').config()
const express = require('express');
const axios = require('axios');
const Helper = require('./Helpers/Grab.js');
const path = require('path');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const serverPort = process.env.PORT || 3000;


app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/leetcode', async (req, res) => {
  try {
    let target = Helper.leetcodeGraphUrl(process.env.LEETUSER);
    const response = await axios.get(target);
    let modifiedList = await Helper.leetcodeModified(response.data.data.recentSubmissionList.slice(0, 12));
    res.send(modifiedList);
  } catch (error) {
    res.send('error');
  }
});
app.get('/api/github', (req, res) => {
  Helper.getReposWithRecentPush()
  .then(sortedRepos => {
    res.send(sortedRepos);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

server.listen(serverPort, () => {
  console.log(`Server hosted on port: ${serverPort}`);
});

