import React from "react";

const Footer = ({ handleDeleteAllDone }) => {
  return (
    <div>
      <div onClick={handleDeleteAllDone}>Delete all done bla</div>
    </div>
  );
};

export default Footer;
