var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({

  title: String,
  title: {
    type: String,
    require: true,
    unique: true
  },
  keywords: Array ,
  published: Boolean,
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  detail: {
    modelNumber: Number,
    handover: Boolean,
    reviews: Number,
    rank: Number
  }
})

module.exports = mongoose.model('Book', BookSchema);