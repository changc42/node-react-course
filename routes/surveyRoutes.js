const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");
const NewMailer = require("../services/NewMailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

sgMail.setApiKey(keys.sendGridKey);

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    console.log(req.body);
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      const mailer = NewMailer(survey, surveyTemplate(survey.body));
      await sgMail.send(mailer);
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/surveys/thanks", (req, res) => {
    res.send("thanks for responding!");
  });
};
