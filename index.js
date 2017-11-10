const express      = require('express');
const app          = express();
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

app.get('/', (req, res) => {
  res.send('hi there');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server Starts on ${PORT}`);
});
