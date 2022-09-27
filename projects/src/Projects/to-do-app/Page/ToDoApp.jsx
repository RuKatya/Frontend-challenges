import { createRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodo } from "../../../redux/todoApp/todoSlice";
import {
  deleteAllDoneTasks,
  deleteOneTask,
  getAllTasksAsync,
  toggleDoneTask,
} from "../../../redux/todoApp/todoThunk";
import AddTaskInput from "../Components/AddTaskInput";
import Header from "../Components/Header";
import "../../../style/to-do-app/index.scss";
import { getTheme } from "../getTheme";
import axios from "axios";

const ToDoApp = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(getTheme);
  const todo = useSelector(selectTodo);
  const [elRefs, setElRefs] = useState([]);
  const todosLenght = todo.length;

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(todosLenght)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [todosLenght]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    (async () => {
      dispatch(getAllTasksAsync());
    })();
  }, []);

  const handleToggleDone = async (e) => {
    const done = e.target.checked;
    const id = e.target.id;

    dispatch(toggleDoneTask({ id, done }));
  };

  const handleDeleteAllDone = async (e) => {
    const allDoneTasks = elRefs.filter(
      (i) => i.current.defaultChecked === true
    );

    const deleteTaskIds = allDoneTasks.map((i) => i.current.id);

    dispatch(deleteAllDoneTasks({ deleteTaskIds }));
  };

  const handleDeleteTask = async (id) => {
    dispatch(deleteOneTask({ id }));
  };
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
        <AddTaskInput theme={theme} />
        <div>
          {todo.map((i, index) => (
            <div key={i._id}>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={i.done}
                  onClick={handleToggleDone}
                  id={i._id}
                  ref={elRefs[index]}
                />
                <span></span>
              </label>
              <div
                className={`to-do-list__task ${
                  i.done
                    ? "to-do-list__task--done"
                    : "to-do-list__task--needTodo"
                }`}
              >
                {i.task}
              </div>
              <img
                src="/images/todoApp/icons/cross.svg"
                alt=""
                onClick={() => handleDeleteTask(i._id)}
              />
            </div>
          ))}
        </div>
        <div onClick={handleDeleteAllDone}>Delete all done bla</div>
      </div>
    </div>
  );
};

export default ToDoApp;
