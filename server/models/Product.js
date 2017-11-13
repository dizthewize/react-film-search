const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['shirts', 'sweatshirts', 'sweaters'],
    required: true
  },
  size: {
    type: String,
    sizes: ['small', 'medium', 'large', 'x-large', 'xx-large'],
    default: 'sm'
  },
  price: {
    type: Number,
    required: true
  },
  imageFile: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('products', productSchema);
