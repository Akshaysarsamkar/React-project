import React, { useState } from "react";

const FormValidate = () => {
  let [formData, setFormData] = useState({
    items: [],
    require: "",
    maxLength: "",
    minLength: "",
    valLength: "",
    maxRange: "",
    minRange: "",
    valRange: "",
  });

  let {
    require,
    maxLength,
    minLength,
    valLength,
    maxRange,
    minRange,
    valRange,
  } = formData;

  let handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  let [errors, setErrors] = useState({});

  let handleSubmit = (event) => {
    event.preventDefault();

    // VALIDATETING THE FORM WHILE SUBMITTING
    let validate = {}; // INSIDE HANDLESUBMIT FUN VALIDATE OBJ ERRORS

    // VALIDATEING 1ST INPUT

    if (require === "") {
      validate.require = "This filed is mandatory!!";
    }

    // validate 2nd input
    if (maxLength === "") {
      validate.maxLength = "This filed is mandatory!!";
    } else if (maxLength.length < 7) {
      validate.maxLength = "maximum cheacter must be 7";
    }

    // validate 3nd input
    if (minLength === "") {
      validate.minLength = "This filed is mandatory!!";
    } else if (minLength.length > 12) {
      validate.minLength = "Minimum cheacter must be 12";
    }

    // validate 4nd input
    if (valLength === "") {
      validate.valLength = "This filed is mandatory!!";
    } else if (valLength.length < 7 || valLength.length > 12) {
      validate.valLength = "Inter character between 7 and 12";
    }

    // validate 5th input
    if (maxRange === "") {
      validate.maxRange = "This filed is mandatory!!";
    } else if (maxLength > 7) {
      validate.maxRange = "Maximum range must be 7";
    }

    // validate 6 input
    if (minRange === "") {
      validate.minRange = "This filed is mandatory!!";
    } else if (minRange < 7) {
      validate.maxRange = "Minimum range must be 7";
    }

    // validate 7 input
    if (valRange === "") {
      validate.valRange = "This filed is mandatory!!";
    } else if (valRange < 7) {
      validate.valRange = "range between must be 7-12";
    }


    setErrors(validate)

    // TO PASS DATA INTO THE ARRAY
    // setFormData({
    //   ...formData,
    //   items: [
    //     ...formData.items,
    //     {
    //       require: formData.require,
    //       maxLength: formData.maxLength,
    //       minLength: formData.minLength,
    //       valLength: formData.valLength,
    //       maxRange: formData.maxRange,
    //       minRange: formData.minRange,
    //       valRange: formData.valRange,
    //     },
    //   ],

    //   // setting back empty
    //   require: "",
    //   maxLength: "",
    //   minLength: "",
    //   valLength: "",
    //   maxRange: "",
    //   minRange: "",
    //   valRange: "",
    // });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form Validation</h1>
        <section>
          <div>
            <label htmlFor="required">Required</label>
            <input
              type="text"
              id="required"
              name="require"
              value={require}
              onChange={handleChange}
            />
            <span>{errors.require}</span>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="maxl">Max Length</label>
            <input
              type="text"
              id="maxl"
              name="maxLength"
              value={maxLength}
              onChange={handleChange}
            />
            <span>{errors.maxLength}</span>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="minl">Min Length</label>
            <input
              type="text"
              id="minl"
              name="minLength"
              value={minLength}
              onChange={handleChange}
            />
            <span>{errors.minLength}</span>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="vall">valLength</label>
            <input
              type="text"
              id="vall"
              name="valLength"
              value={valLength}
              onChange={handleChange}
            />
            <span>{errors.valLength}</span>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="maxR">Max Range</label>
            <input
              type="number"
              id="maxR"
              name="maxRange"
              value={maxRange}
              onChange={handleChange}
            />
            <span>{errors.maxRange}</span>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="minR">Min Range</label>
            <input
              type="number"
              id="minR"
              name="minRange"
              value={minRange}
              onChange={handleChange}
            />
            <span>{errors.minRange}</span>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="valR">Val Range</label>
            <input
              type="number"
              id="valR"
              name="valRange"
              value={valRange}
              onChange={handleChange}
            />
            <span>{errors.valRange}</span>
          </div>
        </section>
        <section>
          <button>Submit</button>
        </section>
      </form>
    </>
  );
};

export default FormValidate;
