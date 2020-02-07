
const surveyTemplate = require("./emailTemplates/surveyTemplate");

modules.export = (survey, surveyTemplate)=>{
  return{
    to: survey
  }
}

class NewMailer{
  constructor(survey, surveyTemplate){

  }
  to: "changc42@gmail.com",
  from: "changc42@gmail.com",
  subject: "A very realistic subject",
  html: surveyTemplate("Did you like our product?")
};
sgMail.send(msg);
