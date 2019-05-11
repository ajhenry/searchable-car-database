import React, { useState } from "react";
import { Collapse } from "reactstrap";

export const Item = ({ id, description, value }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div onClick={() => setCollapse(!collapse)}>
      {id}: {value}
      <Collapse isOpen={collapse}>{description}</Collapse>
    </div>
  );
};
