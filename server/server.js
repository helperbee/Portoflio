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

app.get('/api', (req, res) => {
  let target = Helper.leetcodeGraphUrl(process.env.LEETUSER);
  axios.get(target).then((response) => {
    res.send(response.data.data.recentSubmissionList.slice(0, 10));//10 seems like enough
  }).catch((error) => {
    res.send(error);
  });
});

server.listen(serverPort, () => {
  console.log(`Server hosted on port: ${serverPort}`);
});

