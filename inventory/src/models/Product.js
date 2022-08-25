const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
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
  plant: { //todo fix category
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  water: {
    type: String,
    required: true,
  },
  oxigen: {
    type: Number,
    required: true,
  },
  sunlight: {
    type: String,
    required: true,
  },
  price: Number,
  image: {
    type: String,
    maxlength: 512,
  },
 
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);