const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    randomString: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
