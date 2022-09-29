import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "../../../redux/todoApp/todoSlice";

const Footer = ({ handleDeleteAllDone, filter, setFilter, theme }) => {
  const todo = useSelector(selectTodo);
  const [total, setTotal] = useState();

  // const [colorDiv,setColorDiv] = useState("hsl(234, 11%, 52%)")
  // const [colorHover, setColorHover] = useState("hsl(233, 11%, 84%)")

  useEffect(() => {
    setTotal(todo.filter((i) => i.done !== true).length);
    console.log(todo);
  }, [todo]);

  return (
    <div
      className={`footer ${
        theme === "dark" ? "dark__footer" : "light__footer"
      }`}
    >
      <div>{total} items left</div>
      <div className="footer__filter">
        <div
          onClick={() => setFilter("ALL")}
          className={`footer__filter--btn ${
            filter === "ALL" ? "active" : null
          }`}
        >
          All
        </div>
        <div
          onClick={() => setFilter("ACTIVE")}
          className={`footer__filter--btn ${
            filter === "ACTIVE" ? "active" : null
          }`}
        >
          Active
        </div>
        <div
          onClick={() => setFilter("COMPLETED")}
          className={`footer__filter--btn ${
            filter === "COMPLETED" ? "active" : null
          }`}
        >
          Completed
        </div>
      </div>
      <div onClick={handleDeleteAllDone}>Cleare completed</div>
    </div>
  );
};

export default Footer;
