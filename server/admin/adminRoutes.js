const mongoose = require('mongoose');
const multer = require('multer');
const User = mongoose.model('users');
const Product = mongoose.model('products');
const path = require('path');
const requireAdmin = require('../middlewares/requireAdmin');

module.exports = app => {
  // product CRUD
  app.post('/admin/products/add', requireAdmin, (req, res) => {
    const storage = multer.diskStorage({
      // TODO: Change path after build setup
      destination: './client/public/images/',
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    });

    const upload = multer({
      storage: storage
    }).single('imageFile');

    upload(req, res, (err) => {
      if (err) {
        console.log(err, 'product not saved');
      } else {
        filename = req.file.filename;
        const newProduct = new Product({
          name: req.body.name,
          description: req.body.description,
          size: req.body.size,
          price: req.body.price,
          imageFile: filename
        });

        newProduct.save()
          .then(product => {
            console.log('new product saved');
          })
          .catch(err => {
            console.log(err);
          });
      }
    });

  });

  app.get('/admin/products', requireAdmin, (req, res) => {
    Product.find({}, (err, products) => {
      let productList = {};

      products.forEach((product) => {
        productList[product.id] = product;
      });

      res.send(productList);
    });
  });

  // app.get('/admin/products/edit/:id', requireAdmin, (req, res) => {
  //   Product.findById(id).then(product => {
  //
  //   })
  // });

  // app.put('/admin/products/:id', (req, res) => {
  //   res.send({
  //     hi: 'there'
  //   });
  // });

  app.delete('/admin/products/:id', requireAdmin, (req, res) => {
    Product.remove({_id: req.params.id})
      .then(() => {
        console.log('product deleted');
      })
  });

  // user CRUD
  app.get('/admin/users', requireAdmin, (req, res) => {
    User.find({}, (err, users) => {
      let userList = {};

      users.forEach((user) => {
        userList[user.id] = user;
      });

      res.send(userList);
    });
  });

};
