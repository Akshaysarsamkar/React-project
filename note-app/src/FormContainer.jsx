import React, { useContext } from "react";
import { TaskApi } from "./context/TaskContext";

const FormContainer = () => {
  let data = useContext(TaskApi);

  let { formData, handleChange, handleSubmit } = data;

  let { title, description, category } = formData;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <h1>Take Notes Below</h1>
        </section>
        <section>
          <label htmlFor="title">TITLE</label>
          <div>
            <input type="text" id="title" />
          </div>
        </section>
        <section>
          <label htmlFor="desc">DESCRIPTION</label>
          <div>
            <textarea id="desc" />
          </div>
        </section>
        <section>
          <label htmlFor="">CATEGORY</label>
          <select name="" id="">
            <option value="" disabled>
              --Select--
            </option>
            <option value="">General</option>
            <option value="">Technical</option>
            <option value="">Official</option>
          </select>
        </section>
        <section>
          <button>Submit</button>
        </section>
      </form>
    </>
  );
};

export default FormContainer;
