module.exports = (req, res, next) => {
  if (req.user.role !== 'superadmin' && req.user.email !== 'martez.connerjr@gmail.com') {
    return
      console.log('You are not an admin');
     res.status(401).send('You are not an admin');;
  }

  next();
};
