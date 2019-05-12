import React, { useState } from "react";
import { Collapse } from "reactstrap";
import "./Item.css";

export const Item = ({ id, description, value, properName }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div
      className="item d-flex flex-column m-1 p-2"
      onClick={() => setCollapse(!collapse)}
    >
      <div className="item d-flex flex-row justify-space-between">
        <span className="item-name mr-3">{properName}</span>
        <span className="item-value ml-3">{value}</span>
      </div>
      <Collapse isOpen={collapse}>{description}</Collapse>
    </div>
  );
};
