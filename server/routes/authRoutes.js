module.exports = app => {
  // auth Setup
  app.post('/auth/register', (req, res) => {

    if (req.body.password !== req.body.password2) {
      console.log('Passwords must match');
    }

    if (req.body.password.length < 5) {
      console.log('Password to short please enter more characters');
    } else {
      // Save User Data
      console.log(req.body);
      // Make sure no repeat email or username already in DB

    }
  });

  app.post('/auth/login', (req, res) => {
    res.send({
      hi: 'there'
    });
  });

  app.get('/auth/user/:id', (req, res) => {
    //
  });
};
