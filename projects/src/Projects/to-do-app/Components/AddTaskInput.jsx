import React from "react";

const AddTaskInput = () => {
  const handleSendTask = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSendTask}>
      <input type="text" name="" placeholder="Create a new todo..." />
      <button type="submit">Send</button>
    </form>
  );
};

export default AddTaskInput;
