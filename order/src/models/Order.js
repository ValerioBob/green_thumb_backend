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
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  latitude: {
    type: Number,
    
  },
  longitude: {
      type: Number,
      
  }
});

module.exports = mongoose.model("Order", OrderSchema);