module.exports = app => {
  // product CRUD
  app.post('/api/products', (req, res) => {
    res.send({
      hi: 'there'
    });
  });

  app.post('/api/products/add', (req, res) => {
    res.send({
      hi: 'there'
    });
  });

  // app.get('/api/products/edit/:id', (req, res) => {
  //   res.send({
  //     hi: 'there'
  //   });
  // });
  //
  // app.put('/api/products/:id', (req, res) => {
  //   res.send({
  //     hi: 'there'
  //   });
  // });
  //
  // app.delete('/api/products/:id', (req, res) => {
  //   res.send({
  //     hi: 'there'
  //   });
  // });
};
