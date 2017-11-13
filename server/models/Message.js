const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  success: {
    type: String
  },
  error: {
    type: String
  },
  recipient: {
    type: String
  }
});

mongoose.model('messages', messageSchema);
