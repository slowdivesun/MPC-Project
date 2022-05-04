const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  text: {
    type: String,
    required: true,
  },
  emotion: {
    type: Number,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Entry = mongoose.model("entry", EntrySchema);
