const mongoose = require("mongoose");

mongoose.connect(
   process.env.MONGODB_URI || "mongodb://localhost:27017/cluster0",
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   }
);

module.exports = mongoose.connection;
