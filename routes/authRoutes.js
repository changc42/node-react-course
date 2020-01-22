const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.send("logged out!");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  const User = mongoose.model("users");
  app.get("/modify_database", (req, res) => {
    new User({
      googleId: "23453563747"
    })
      .save()
      .then(res.send("hello!"));
  });
};
