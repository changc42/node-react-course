const keys = require("../../config/keys");

module.exports = question => {
  return `
    <div style="text-align: center">
      <h1>Help us improve!</h1>
      <p>${question}</p>
      <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
      <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
    </div>
  `;
};
