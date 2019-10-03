const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/itea-ci'));
app.get('/*', function (req, resp) {
  resp.sendFile(path.join(__dirname + '/dist/itea-ci/index.html'));
});
app.listen(process.env.PROD || 8080);
