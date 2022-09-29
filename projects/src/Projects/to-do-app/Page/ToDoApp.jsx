import { createRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTaskInput from "../Components/AddTaskInput";
import Header from "../Components/Header";
import { selectTodo } from "../../../redux/todoApp/todoSlice";
import {
  deleteAllDoneTasks,
  deleteOneTask,
  getAllTasksAsync,
  toggleDoneTask,
} from "../../../redux/todoApp/todoThunk";
import "../../../style/to-do-app/index.scss";
import { getTheme } from "../getTheme";
import Footer from "../Components/Footer";

const ToDoApp = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(getTheme);
  const todo = useSelector(selectTodo);
  const [elRefs, setElRefs] = useState([]);
  const todosLenght = todo.length;
  const [filter, setFilter] = useState("ALL");
  // const [done, setDone] = useState('')

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
      dispatch(getAllTasksAsync({ filter }));
    })();
  }, [filter]);

  const handleToggleDone = async (e) => {
    const done = e.target.checked;
    const id = e.target.id;

    dispatch(toggleDoneTask({ id, done }));
  };

  const handleDeleteAllDone = async (e) => {
    // const allDone = document.querySelectorAll(".doneInput");
    // .getAttribute("checked");
    // console.log(allDone);
    // const aaa = allDone.filter((i) => i.checked === true);
    // console.log(aaa);

    // console.log(allDone);
    const allDoneTasks = elRefs.filter((i) => i.current.checked === true);

    console.log(allDoneTasks);

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
      <div className="to-do-card">
        <Header theme={theme} setTheme={setTheme} />
        <AddTaskInput theme={theme} />

        <div
          className={`list-of-tasks-to-do ${
            theme === "dark"
              ? "dark__list-of-tasks-to-do"
              : "light__list-of-tasks-to-do"
          }`}
        >
          {todo.length > 0 ? (
            <>
              {todo.map((task, index) => (
                <div className="list-of-tasks-to-do__eachTask" key={task._id}>
                  <label className="formAddTask__label--forInput">
                    <input
                      type="checkbox"
                      className="doneInput"
                      checked={task.done}
                      onChange={handleToggleDone}
                      id={task._id}
                      ref={elRefs[index]}
                    />
                    <span className="formAddTask__span--ofInput"></span>
                  </label>
                  <p className={task.done ? "list-of-tasks-to-do__done" : null}>
                    {task.task}
                  </p>
                  <img
                    src="/images/todoApp/icons/cross.svg"
                    alt="delete icon"
                    onClick={() => handleDeleteTask(task._id)}
                  />
                </div>
              ))}
            </>
          ) : (
            <div>No task here</div>
          )}
        </div>
        <Footer
          handleDeleteAllDone={handleDeleteAllDone}
          filter={filter}
          setFilter={setFilter}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default ToDoApp;
