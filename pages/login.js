
const I = actor();

module.exports = {

  // insert your locators and methods here
  fields: {
    email: "#email",
    password: "#password"
  },
  submitButton: {css:"#btn-sign-in"},
  sendForm(email,password) {
    I.fillField(this.fields.email,email);
    I.fillField(this.fields.password,password);
    I.click(this.submitButton);
  }
}
