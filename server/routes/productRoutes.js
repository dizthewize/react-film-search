const mongoose = require('mongoose');
const multer = require('multer');
const Product = mongoose.model('products');
const Order = mongoose.model('orders');
const path = require('path');

module.exports = app => {

  app.get('/api/products', (req, res) => {
    Product.find({}, (err, products) => {
      let productList = {};

      products.forEach((product) => {
        productList[product.id] = product;
      });

      res.send(productList);
    });
  });

  app.post('/api/order', (req, res) => {
    const newOrder = new Order({
      userEmail: req.user.email,
      productId: req.product.id,
      productName: req.product.name,
      orderPrice: req.body.price
    });

    newOrder.save()
      .then(order => {
        // set up route for Stripe charge
      })
  });

};
