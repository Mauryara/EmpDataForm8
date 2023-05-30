import { html, css, LitElement } from "lit";
// import { validate } from "class-validator";
class EmpForm extends LitElement {
  static styles = css`
    .form-center {
      color: #fff;
    }

    h2 {
      font-family: Georgia;
      margin-bottom: 10px;
      font-weight: 900;
    }

    form {
      width: 650px;
      border: 2px solid #fff;
      border-radius: 20px;
      padding: 30px;
      margin: 50px auto;
      background: linear-gradient(to top, #0066ff 0%, #000066 100%);
    }

    label {
      display: inline;
      margin-top: 10px;
      font-family: Arial;
      font-weight: 700;
    }

    input[type="text"],
    input[type="email"] {
      padding: 5px;
      margin-top: 5px;
      border: 1px solid black;
      border-radius: 3px;
    }

    button {
      display: block;
      width: 30%;
      border-radius: 8px;
      background-color: #4caf50;
      color: #fff;
      padding: 14px 28px;
      font-size: 20px;
      cursor: pointer;
      text-align: center;
      margin: 20px auto;
    }

    select {
      width: 80%;
      height: 27px;
      margin: 5px 0 0;
      padding: 5px;
      background: white;
      border: 1px solid;
      border-radius: 4px;
    }
  `;

  static properties = {
    fullName: { type: String },
    employeeCode: { type: String },
    officialEmail: { type: String },
    personalEmail: { type: String },
    designation: { type: String },
    department: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    landmark: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zip: { type: String },
    nameerrorMessage: { type: String },
    empcodeErrorMessage: { type: String },
    officialEmailErrorMessage: { type: String },
    personalEmailErrorMessage: { type: String },
    designationErrorMessage: { type: String },
    addressLine1ErrorMessage: { type: String },
    addressLine2ErrorMessage: { type: String },
    landmarkErrorMessage :  { type: String },
  };

  constructor() {
    super();
    this.fullName = "";
    this.employeeCode = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.designation = "";
    this.department = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.landmark = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zip = "";
    this.nameerrorMessage = "";
    this.empcodeErrorMessage = "";
    this.officialEmailErrorMessage = "";
    this.personalEmailErrorMessage = "";
    this.designationErrorMessage = "";
    this.addressLine1ErrorMessage = "";
    this.addressLine2ErrorMessage = "";
    this.landmarkErrorMessage = "";
  }

  render() {
    return html`
      <div class="form-center">
        <form @submit="${this.handleSubmit}">
          <h2>Employee Data Form</h2>
          <table>
            <tr>
              <td>
                <label for="fullName"> Full Name:</label>
              </td>

              <td>
                <input
                  type="text"
                  id="fullName"
                  .value="${this.fullName}"
                  @input="${this.validateName}"
                  required
                />
                <br />
                ${this.nameerrorMessage}
              </td>

              <td>
                <label for="employeeCode">Employee Code:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="employeeCode"
                  .value="${this.employeeCode}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
              ${this.empcodeErrorMessage}
            </tr>
            <tr>
              <td>
                <label for="officialEmail">Official Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="officialEmail"
                  .value="${this.officialEmail}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
              ${this.officialEmailErrorMessage}

              <td>
                <label for="personalEmail">Personal Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="personalEmail"
                  .value="${this.personalEmail}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
              ${this.personalEmailErrorMessage}
            </tr>

            <tr>
              <td>
                <label> Designation: </label>
              </td>
              <td>
                <select
                  id="designation"
                  .value="${this.designation}"
                  @input="${this.validateName}"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                </select>
              </td>
              ${this.designationErrorMessage}

              <td>
                <label> Department: </label>
              </td>
              <td>
                <select
                  id="department"
                  .value="${this.department}"
                  @input="${this.validateName}"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Technology">Technology</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </td>
            </tr>

            <tr>
              <td><h2>Address</h2></td>
            </tr>

            <tr>
              <td>
                <label for="addressLine1">Address Line 1:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="addressLine1"
                  .value="${this.addressLine1}"
                  @input="${this.validateName}"
                  required
                
                /><br />
              </td>
              ${this.addressLine1ErrorMessage}

              <td>
                <label for="addressLine2">Address Line 2:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="addressLine2"
                  .value="${this.addressLine2}"
                  @input="${this.validateName}"
                /><br />
              </td>
              ${this.addressLine2ErrorMessage}
            </tr>

            <tr>
              <td>
                <label for="landmark">Landmark:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="landmark"
                  .value="${this.landmark}"
                  @input="${this.validateName}"
                  required
                  maxlength="50"
                /><br />
              </td>
              ${this.landmarkErrorMessage}

              <td>
                <label for="city">City:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="city"
                  .value="${this.city}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
            </tr>

            <tr>
              <td>
                <label for="state">State:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="state"
                  .value="${this.city}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
              <td>
                <label for="country">Country:</label>
              </td>
              <td>
                <input
                  id="country"
                  type="text"
                  .value="${this.country}"
                  @input="${this.validateName}"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="zip">Zip:</label>
              </td>
              <td>
                <input
                  id="zip"
                  type="text"
                  .value="${this.zip}"
                  @input="${this.validateName}"
                  required
                /><br />
              </td>
            </tr>
          </table>

          <button>Submit</button>
        </form>
      </div>
    `;
  }

  // validateName(event) {

  // }

  handleSubmit(event) {
    event.preventDefault();
    alert("success ...");
    const empData = {
      fullName: this.fullName,
      employeeCode: this.employeeCode,
      officialEmail: this.officialEmail,
      personalEmail: this.personalEmail,
      designation: this.designation,
      department: this.department,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      landmark: this.landmark,
      city: this.city,
      state: this.state,
      country: this.country,
      zip: this.zip,
    };
    this.saveAddressToLocalStorage(empData);
  }

  saveAddressToLocalStorage(empData) {
    const existingEmpData = JSON.parse(localStorage.getItem("empData")) || [];
    existingEmpData.push(empData);
    localStorage.setItem("empData", JSON.stringify(existingEmpData));
    this.clearForm();
    console.log("Address saved to local storage:", empData);
  }

  clearForm() {
    this.fullName = "";
    this.employeeCode = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.designation = "";
    this.department = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.landmark = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zip = "";
  }

  validateName(e) {
    const inputName = e.target.id;
    this[inputName] = e.target.value;
    const formdata = e.target.value;
    const inputdata = formdata.replaceAll(" ", "");
    const formid = e.target.id;
    const letters = /^[A-Za-z]+$/;
    switch (formid) {
      case "fullName": {
        console.log(inputdata);
        console.log(inputdata.length);
        if (inputdata == "") {
          this.nameerrorMessage = "";
          break;
        } else if (inputdata.length < 3) {
          console.log(formdata.length);
          this.nameerrorMessage = "Please Enter Minimum 3 characters";
          break;
        } else if (inputdata.length > 40) {
          this.nameerrorMessage = "Please Enter maximum 40 characters";
          break;
        } else if (!inputdata.match(letters)) {
          this.nameerrorMessage = "Please Enter maximum 40 characters";
          break;
        } else {
          this.nameerrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      case "employeeCode": {
        let pattern = "[A-Za-z][0-9]{6}";
        if (inputdata == "") {
          this.empcodeErrorMessage = "";
          break;
        } else if (!inputdata.match(pattern)) {
          this.empcodeErrorMessage =
            "please Enter one alphabate and six digits i.e-A123456";
          break;
        } else {
          this.empcodeErrorMessage = "";
          console.log("EmpCode is Right in Pattern");
          break;
        }
      }
      case "officialEmail": {
        let pattern = /^\S+@(annalect)\.com$/;
        if (inputdata == "") {
          this.officialEmailErrorMessage = "";
          break;
        } else if (!inputdata.match(pattern)) {
          this.officialEmailErrorMessage = "Invalid";
          break;
        } else {
          this.officialEmailErrorMessage = "";
          console.log("Official Email Id is currect");
          break;
        }
      }
      case "personalEmail": {
        let pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        // let pattern2=  /^[^\s@]+@yahoo\.com$/ ;
        // boolean result = inputdata.match(pattern)

        if (inputdata == "") {
          this.personalEmailErrorMessage = "";
          break;
        } else if (pattern.test(inputdata)) {
          console.log(pattern.test(inputdata));
          this.personalEmailErrorMessage = "Please Enter Correct EmailId";
          break;
        } else {
          this.personalEmailErrorMessage = "";
          // console.log(inputdata == pattern);
          // console.log(inputdata)
          // inputdata.match(pattern)

          // // console.log("Personal Email Id is currect : " + formdata.localeCompare(pattern));
          // // console.log("Personal Email Id is currect : " + formdata.localeCompare(pattern2));

          break;
        }
      }
      case "designation": {
        if (inputdata === "") {
          this.designationErrorMessage = "Please choose a designation";
          break;
        } else {
          console.log("ok");
        }
      }
      case "department": {
        console.log("department");
        console.log(document.getElementById(fullName).value);
        break;
      }
      case "addressLine1": {
        if (inputdata == "") {
          this.addressLine1ErrorMessage = "";
          break;
        } 
        else if (inputdata.length < 15) {
          console.log(formdata.length);
          this.addressLine1ErrorMessage = "Please Enter Minimum 15 characters";
          break;
        } 
        else if (inputdata.length > 80) {
          this.addressLine1ErrorMessage = "Please Enter maximum 80 characters";
          break;
        } 
        else if (!inputdata.match(letters)) {
          this.addressLine1ErrorMessage = "Please Enter maximum 80 characters";
          break;
        }
        else {
          this.addressLine1ErrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      case "addressLine2": {
        if (inputdata == "") {
          this.addressLine2ErrorMessage = "";
          break;
        } 
        else if (inputdata.length < 15) {
          console.log(formdata.length);
          this.addressLine2ErrorMessage = "Please Enter Minimum 15 characters";
          break;
        } 
        else if (inputdata.length > 80) {
          this.addressLine2ErrorMessage = "Please Enter maximum 80 characters";
          break;
        } 
        else if (!inputdata.match(letters)) {
          this.addressLine2ErrorMessage = "Please Enter maximum 80 characters";
          break;
        } 
        else {
          this.addressLine2ErrorMessage = "";
          console.log("Currect");
          break;
        }
      }
      case "landmark": {
        if (inputdata == "") {
          this.landmarkErrorMessage = "Can't be empty";
          break;
        } 
      }
      case "city": {
        console.log("inner");
        console.log(document.getElementById(fullName).value);
        break;
      }
      case "state": {
        console.log("inner");
        console.log(document.getElementById(fullName).value);
        break;
      }
      case "country": {
        console.log("inner");
        console.log(document.getElementById(fullName).value);
        break;
      }
      case "zip": {
        console.log("inner");
        console.log(document.getElementById(fullName).value);
        break;
      }
      default: {
        console.log("kamina ho jare ");
      }
      // case (fullName.trim() === "" || fullName.length > 40):
      //   this.nameerrorMessage = "Please enter a valid full name (maximum length 40 characters)";
      //   break;
      // default:
      //   this.nameerrorMessage = "";
      //   this.fullName = fullName;
      //   break;
    }
  }
}

customElements.define("emp-form", EmpForm);
