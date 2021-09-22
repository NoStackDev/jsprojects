import React from "react";

const InputText = (props) => {
  return (
    <input
      type="text"
      name="subject"
      placeholder={props.placeholder}
      id={props.id}
    />
  );
};

const InputTextArea = (props) => {
  return (
    <textarea
      type="textarea"
      name="body"
      placeholder={props.placeholder}
      id={props.id}
    />
  );
};

const Option = (props) => {
  return <option name={props.name}>{props.name}</option>;
};

const InputSelect = (props) => {
  return (
    <select name="filterOptions" id="">
      {props.options.map((option, index) => {
        return <Option key={index} name={option} />;
      })}
    </select>
  );
};

const Input = (props) => {
  switch (props.type) {
    case "textarea":
      return <InputTextArea placeholder={props.placeholder} id={props.id} />;
    case "select":
      return <InputSelect options={props.options} id={props.id} />;
    default:
      return <InputText placeholder={props.placeholder} id={props.id} />;
  }
};

export default Input;
