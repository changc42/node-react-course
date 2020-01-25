const express = require("express");
const app = express();

const mongoose = require("mongoose");
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);
require("./models/user");

require("./routes/middleware")(app);

require("./services/passport");
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log("running on port " + PORT));
