const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('users');
const bcrypt = require('bcryptjs');

module.exports = app => {
  // auth Setup
  app.post('/auth/register', (req, res) => {
    // check if passwords match
    if (req.body.password !== req.body.password2) {
      console.log('Passwords must match');
    }
    // make sure password is not to short
    if (req.body.password.length < 5) {
      console.log('Password to short please enter more characters');
    } else {
      // Make sure email does not already exist
      User.findOne({email: req.body.email})
        .then(user => {
          if(user){
            console.log('user already registered')
          } else {
            // save User through model
            const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
            });

            // hash password
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                  .then(user => {
                    console.log('new user created');
                  })
                  .catch(err => {
                    console.log(err);
                  });
              });
            });
          }
        });
    }

  });

  app.post('/auth/login', (req, res, next) => {
    passport.authenticate('local', null)(req, res, next);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};
