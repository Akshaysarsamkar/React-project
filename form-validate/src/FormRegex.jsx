import React, { useState } from "react";

const FormRegex = () => {
  let [formData, setFormData] = useState({
    email: "",
    url: "",
    digits: "",
    number: "",
    alphaNumeric: "",
  });

  let { email, url, digits, number, alphaNumeric } = formData;
  let handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  let [errors, setErrors] = useState({});
  let handleSubmit = (event) => {
    event.preventDefault();

    //  VALIDATION
    let validate = {};

    // EMAIL VALIDATIONS
    let regexEmail = /\S+@\S+\.\S+/;

    if (email === "") {
      validate.email = "This field is Mandatary!!!!";
    } else if (!regexEmail.test(email)) {
      validate.email = "Enter valid Email..";
    }

    // SECOND INPUT
    let regexUrl =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    if (regexUrl === "") {
      validate.url = "This field is Mandatary!!!!";
    } else if (!regexUrl.test(url)) {
      validate.url = "Enter valid url";
    }

    // THIRTD INPUT FIELD
    let regexDigits = /^[0-9]+$/;
    if (regexDigits === "") {
      validate.digits = "This field is Mandatary!!!!";
    } else if (!regexDigits.test(url)) {
      validate.digits = "Enter valid Digits..";
    }

    // number input filed
    let regexNumber = /^-?\d+(?:\.\d+)?$/;
    if (regexNumber === "") {
      validate.number = "This field is Mandatary!!!!";
    } else if (!regexNumber.test(url)) {
      validate.number = "Enter valid Number..";
    }

    // last input
    let regexAlpha = /^[a-zA-Z0-9\s]+$/;
    if (regexAlpha === "") {
      validate.alphaNumeric = "This field is Mandatary!!!!";
    } else if (!regexNumber.test(url)) {
      validate.alphaNumeric = "Enter valid data..";
    }
    setErrors(validate);
  };

  let handleReset = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form action="">
        <section>
          <h1>Form to validate</h1>
        </section>
        <section>
          <div>
            <label htmlFor="email">Emails</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <span>{errors.email}</span>
        </section>
        <section>
          <div>
            <label htmlFor="url">URL</label>
            <input
              type="text"
              id="url"
              name="url"
              value={url}
              onChange={handleChange}
            />
          </div>
          <span>{errors.url}</span>
        </section>
        <section>
          <div>
            <label htmlFor="dig">Digits</label>
            <input
              type="text"
              id="dig"
              name="digits"
              value={digits}
              onChange={handleChange}
            />
          </div>
          <span>{errors.digits}</span>
        </section>
        <section>
          <div>
            <label htmlFor="num">Number</label>
            <input
              type="text"
              id="num"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </div>
          <span>{errors.number}</span>
        </section>
        <section>
          <div>
            <label htmlFor="alpha">Alpha Numeric</label>
            <input
              type="text"
              id="alpha"
              name="alphaNumeric"
              value={alphaNumeric}
              onChange={handleChange}
            />
          </div>
          <span>{errors.alphaNumeric}</span>
        </section>

        <section>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReset}>Reset</button>
        </section>
      </form>
    </>
  );
};

export default FormRegex;
