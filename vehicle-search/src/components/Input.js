import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Select from "react-select";

export default props => {
  const { data, name, value } = props;
  console.log(data);
  console.log(value);
  return (
    <Select
      options={data.map(option => {
        return { value: option, label: option, name };
      })}
      className="w-100"
      placeholder={`Select a ${name}`}
      styles={customStyles}
      {...props}
    />
  );
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "#DCDCDC" : "#E8E8E8",
    padding: 10,
    borderBottom: "0px",
    color: "#000"
  }),
  control: (provided, state) => ({
    ...provided,
    background: "#E8E8E8",
    border: "0px",
    borderRadius: "10px",
    boxShadow: "none"
    // none of react-select's styles are passed to <Control />
  }),
  input: provided => ({
    ...provided,
    color: "#DCDCDC"
  }),
  menu: (provided, state) => ({
    ...provided,
    background: "#E8E8E8",
    boxShadow: "none",
    marginTop: "10px",
    padding: 0,
    borderRadius: "10px",
    overflow: "hidden"
  })
};
