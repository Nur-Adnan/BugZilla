const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  url: String,
  email: String,
  issue: String,
  details: String,
  testing: String,
  describe: String,
  screenshot: {
    data: Buffer,
    contentType: String,
  },
  sendReport: Boolean,
  blocked: {
    type: Boolean,
    default: false,
  },
});

const BugModel = mongoose.model("Bug", bugSchema);

module.exports = BugModel;
