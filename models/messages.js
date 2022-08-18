import mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
  // TODO сделать связь между коллекциями
  chatId: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    enum: ["USER", "BOT"],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export const Messages = mongoose.model('Messages', messagesSchema, 'Messages')