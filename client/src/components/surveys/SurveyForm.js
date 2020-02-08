import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label="Survey Title"
          type="Text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Subject Line"
          type="Text"
          name="subject"
          component={SurveyField}
        />
        <Field
          label="Email Body"
          type="Text"
          name="body"
          component={SurveyField}
        />
        <Field
          label="Recipient List"
          type="Text"
          name="emails"
          component={SurveyField}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
