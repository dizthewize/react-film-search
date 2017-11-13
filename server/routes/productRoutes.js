const mongoose = require('mongoose');
const multer = require('multer');
const Product = mongoose.model('products');
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

};
