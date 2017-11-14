const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  userEmail: {
    type: String,
    ref: 'users'
  },
  productId: {
    type: [Schema.ObjectId],
    ref: 'products'
  },
  productName: {
    type: [String],
    ref: 'products'
  },
  orderPrice: {
    type: Number,
    ref: 'products'
  }
})

mongoose.model('orders', orderSchema);
