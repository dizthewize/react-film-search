const express       = require('express');
const app           = express();
const mongoose      = require('mongoose');
const keys          = require('../config/keys');
const bodyParser    = require('body-parser');
const cookieSession = require('cookie-session');
const bcrypt        = require('bcryptjs');
const passport      = require('passport');
const multer        = require('multer');
// require('./models/Message');
require('./models/User');
require('./models/Product');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./admin/adminRoutes')(app);
require('./routes/authRoutes')(app);
require('./routes/productRoutes')(app);

// Passport config
require('./services/passport')(passport);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server Starts on ${PORT}`);
});
