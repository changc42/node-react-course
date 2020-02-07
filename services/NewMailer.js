const surveyTemplate = require("./emailTemplates/surveyTemplate");

module.exports = ({ subject, recipients, body }, surveyBody) => {
  return {
    to: recipients.map(e => e.email),
    from: "changc42@gmail.com",
    subject,
    html: surveyBody
  };
};
