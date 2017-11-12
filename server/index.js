const express      = require('express');
const app          = express();
const mongoose     = require('mongoose');
const keys         = require('../config/keys');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
require('./models/User');
// require('./models/Product');

mongoose.connect(keys.mongoURI);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server Starts on ${PORT}`);
});
