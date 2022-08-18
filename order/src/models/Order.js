const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  orderItems: [
    {
      product: {
        type: Schema.Types.ObjectId,
      },
      qty: Number,
    },
  ],
  total: {
    type: Number,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  latitude: {
    type: Number,
    required: false
  },
  longitude: {
      type: Number,
      required: false,
  }
});

module.exports = mongoose.model("Order", OrderSchema);