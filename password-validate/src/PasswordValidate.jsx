import React, { useState } from "react";

const PasswordValidate = () => {
  let [formData, setFormData] = useState({
    password: "",
    confirmPass: "",
  });

  let { password, confirmPass } = formData;

  let [errors, setErrors] = useState({
    password: "",
    confirmPass: "",
  });

  let handleOnChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  let handleSubmit = (e) => {
    e.preventDefault();

  
      let validate = {};
      // check first input
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (formData.password === "") {
        validate.password = "Please Fill the Field.......";
      } else if (!passwordRegex.test(password)) {
        validate.password =
          "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
      }

      // for second Input
      if (formData.confirmPass === "") {
        validate.confirmPass = "Please Fill the Field.......";
      } else if (formData.confirmPass !== formData.password) {
        validate.confirmPass =
          "Password Not match Please Enter same Password!!";
      }
      setErrors(validate);
   
  };

  console.log("erros", errors);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <section className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-700">
              Password Validation
            </h1>
          </section>

          <section className="mb-4">
            <label
              htmlFor="pass"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <div>
              <input
                type="password"
                id="pass"
                name="password"
                value={password}
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <span className="text-red-600 text-sm mt-1 block">
              {errors.password}
            </span>
          </section>

          <section className="mb-6">
            <label
              htmlFor="cpass"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Confirm Password
            </label>
            <div>
              <input
                type="password"
                id="cpass"
                name="confirmPass"
                value={confirmPass}
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <span className="text-red-600 text-sm mt-1 block">
              {errors.confirmPass}
            </span>
          </section>

          <section className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default PasswordValidate;
