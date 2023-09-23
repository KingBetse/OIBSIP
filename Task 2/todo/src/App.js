import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const handleTasks = (task) => {
    setTasks((tasks) => [...tasks, task]);

    console.log(task);
  };
  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  const handleCheck = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="App">
      <Container
        handleTasks={handleTasks}
        task={task}
        setTask={setTask}
        tasks={tasks}
        deleteTask={deleteTask}
        handleCheck={handleCheck}
      />
    </div>
  );
}

function Container({
  handleTasks,
  tasks,
  setTask,
  task,
  deleteTask,
  handleCheck,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    const newTask = { task, checked: false, id: Date.now() };
    handleTasks(newTask);
    e.target.reset();
  };
  return (
    <div className="container">
      <h2>TO-DO List 📑</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="enter your task"
            className="input"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button className="btn">ADD</button>
        </div>
      </form>
      <div className="task-co">
        {tasks.map((tasks) => (
          <Tasks
            tasks={tasks}
            deleteTask={deleteTask}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );

  function Tasks({ tasks, deleteTask, handleCheck }) {
    return (
      <div className="tasks">
        <div>
          <input
            type="checkbox"
            className="checkBox"
            checked={tasks.checked === true}
            onChange={() => {
              handleCheck(tasks.id);
            }}
          />
          <span style={tasks.checked ? { textDecoration: "line-through" } : {}}>
            {tasks.task}
          </span>
        </div>

        <div className="close">
          <button
            onClick={() => {
              deleteTask(tasks.id);
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default App;
