const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    requred: true,
  },
  name: {
    type: String,
    required: true,
  },
  latin: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // plant: {
  //   type: Boolean,
  //   required: true,
  // },
  category: {
    type: String,
    // ref: "Category",
  },
  water: {
    type: String,
    required: true,
  },
  oxygen: {
    type: Number,
    required: true,
  },
  sunlight: {
    type: String,
    required: true,
  },
  price: Number,
  picture: {
    type: String,
    // maxlength: 512,
  },
 
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);