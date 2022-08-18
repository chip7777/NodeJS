import mongoose from "mongoose";

const chatsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Chats = mongoose.model('Chats', chatsSchema, 'Chats');