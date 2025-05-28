import React, { useState } from "react";
import FormContainer from "./FormContainer";
import ToDoContainer from "./ToDoContainer";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  let [formData, setFormData] = useState({
    items: [],
    cource: "",
    trainer: "",
    id: uuidv4(), // to generate random id to identofy perticular element
  });

  let handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  let handleSubmit = (event) => {
    event.preventDefault();

    // TO PASS THE DATA INTO ARRAY

    if (formData.cource === "" || formData.trainer === "") {
      alert("Please fill all the field properly");
    } else {
      setFormData({
        ...formData,
        items: [
          ...formData.items,
          {
            cource: formData.cource,
            trainer: formData.trainer,
            id: formData.id,
          },
        ],

        cource: "", //setting cource input back into empty to collet new data
        trainer: "",
        id: uuidv4(), // to gnerate new id for the next datas
      });
    }
  };

  // function to delete data
  let handleDelete = (delId) => {
    console.log("id of item key ", delId);

    let filterData = formData.items.filter((val) => {
      return val.id !== delId; // IF ID OF CURRENT VAL IS NOT MATCHING OF ITEM TO DELETE HAN WILL COLLECT CURRENT VAL AND STORE IT INSIDE THE FILTERDATA
    });

    setFormData({ ...formData, items: filterData });
  };

  // FUNCITON TO EDIT THE COURCE
  let handleEdit = (editId) => {
    // collecting all the remaining value aprt from vlaue to be updated
    let remaimgVal = formData.items.filter((val) => {
      return val.id !== editId;
    });

    // FIND THE SPECIFIC ITEM TO UPDATE
    let editdata = formData.items.find((val) => {
      return val.id === editId; // if the id of specific val matches with item to be edited then stored it in edititem
    });

    setFormData({
      items: remaimgVal, // returing remaining value on ui
      cource: editdata.cource,
      trainer: editdata.trainer,
      id: editdata.id,
    });
  };

  // CLEAR ALL DATA
  let clearAlldata = () => {
    console.log("===================", formData.items);

    setFormData({
      items: [],
      cource: "",
      trainer: "",
      id: uuidv4(), // to generate random id to identofy perticular element
    });

    console.log("btn click");
  };

  return (
    <>
      <section id="mainContainer">
        <FormContainer
          handleSubmit={handleSubmit}
          cource={formData.cource}
          trainer={formData.trainer}
          handleChange={handleChange}
        />

        <ToDoContainer
          items={formData.items}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearAlldata={clearAlldata}
        />
      </section>
    </>
  );
};

export default App;
