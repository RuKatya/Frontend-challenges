import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodo } from "../../../redux/todoApp/todoSlice";
import { getAllTasksAsync } from "../../../redux/todoApp/todoThunk";
import AddTaskInput from "../Components/AddTaskInput";
import Header from "../Components/Header";
import "../../../style/to-do-app/index.scss";
import { getTheme } from "../getTheme";

const ToDoApp = () => {
  const dispatch = useDispatch();
  const todo = useSelector(selectTodo);
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    (async () => {
      dispatch(getAllTasksAsync());
    })();
  }, []);

  return (
    <div
      className={`to-do-app main-page-of-project ${
        theme === "dark" ? "dark__main" : "light__main"
      }`}
    >
      <div
        className={`to-do-list ${
          theme === "dark" ? "to-do-list__dark" : "to-do-list__light"
        }`}
      >
        <Header theme={theme} setTheme={setTheme} />
        <AddTaskInput />
        <div>
          {todo.map((i) => (
            <div key={i._id}>{i.task}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
