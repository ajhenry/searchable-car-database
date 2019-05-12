import React from "react";
import Select from "react-select";

export default props => {
  const { data, name } = props;
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
  }),
  input: provided => ({
    ...provided
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
