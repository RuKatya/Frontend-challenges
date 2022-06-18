import React from "react";

function Context({ advice }) {
  return (
    <div>
      <h4>ADVICE #{advice.id}</h4>
      <p>"{advice.advice}"</p>
    </div>
  );
}

export default Context;
