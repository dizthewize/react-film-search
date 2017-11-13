const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('users');

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    // Match user
    User.findOne({
      email:email
    }).then(user => {
      if (!user) {
        return done(null, false);
      }

      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          throw err;
        };
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });

  }));
};
