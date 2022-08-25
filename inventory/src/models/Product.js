const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  // code: {
  //   type: String,
  //   unique: true,
  //   required: true,
  // },
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
  plant: {
    type: Boolean,
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