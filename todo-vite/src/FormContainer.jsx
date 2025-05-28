import React from "react";

const FormContainer = (props) => { 

    let {handleSubmit,cource,trainer,handleChange} = props

  return (
    <>
      <form onSubmit={handleSubmit} className="formContainer">
        <h1>FORM TO ENTER COURSE DETAILS</h1>
        <div>
          <label htmlFor="cname">Cource: </label>
          <input 
          type="text" 
          id="cname"
          name="cource"
          value={cource}
          onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="tname">Trainer</label>
          <input 
          type="text" 
          id="tname" 
          name="trainer"
          value={trainer}
          onChange={handleChange}/>
        </div>
        <div className="btnContainer">
            <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormContainer;
