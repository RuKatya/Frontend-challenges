import React from "react";
import { useDispatch } from "react-redux";
import { addNewTaskAsync } from "../../../redux/todoApp/todoThunk";

const AddTaskInput = ({ theme }) => {
  const dispatch = useDispatch();

  const handleSendTask = async (e) => {
    e.preventDefault();

    const task = e.target.elements.task.value;
    const done = e.target.elements.ifDone.checked;

    if (task.length > 0) {
      dispatch(addNewTaskAsync({ task, done }));
      e.target.reset();
    } else {
      alert("must includes text");
    }
  };

  return (
    <form
      onSubmit={handleSendTask}
      className={`formAddTask ${
        theme === "dark" ? "dark__formAddTask" : "light__formAddTask"
      }`}
    >
      <label htmlFor="checkboxOfTask" className="formAddTask__label--forInput">
        <input type="checkbox" id="checkboxOfTask" name="ifDone" />
        <span className="formAddTask__span--ofInput"></span>
      </label>
      <input type="text" name="task" placeholder="Create a new todo..." />
      <button type="submit" hidden>
        Send
      </button>
    </form>
  );
};

export default AddTaskInput;
