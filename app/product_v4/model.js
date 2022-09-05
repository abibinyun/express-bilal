const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "file nama harus di isi"],
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    minlength: 1000,
    maxlength: 100000000,
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true,
  },
  image_url: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
