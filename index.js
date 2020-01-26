const express = require("express");
const app = express();
require("./routes/middleware")(app);
require("./routes/authRoutes")(app);

const mongoose = require("mongoose");
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);
require("./models/user");

const User = mongoose.model("users");
app.get("/modify_database", (req, res) => {
  new User({
    googleId: "23453563747"
  })
    .save()
    .then(res.send(process.env.MONGO_URI));
});

require("./models/user");

require("./services/passport");

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log("running on port " + PORT));

//dummy change
