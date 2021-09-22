import React from "react";
import Input from "./input";

const Toolbar = (props) => {
  return (
    <div>
      <Input type="text" placeholder="filter by" />
      <Input type="select" options={["Last modified", "Subject"]} />
    </div>
  );
};

export default Toolbar;
