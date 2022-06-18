import React from "react";

const Selected = ({ chooseNumber }) => {
  return (
    <div className="intective-rating__component--selected">
      You selected {chooseNumber} out of 5
    </div>
  );
};

export default Selected;
