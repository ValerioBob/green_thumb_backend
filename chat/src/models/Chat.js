const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  userId: {
    type: ObjectId,
  },
  messageId: {
    type: ObjectId
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Chat", ChatSchema);