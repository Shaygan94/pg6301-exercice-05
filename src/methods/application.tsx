import React, { useState } from "react";

export function Application() {
  const [tasks, setTasks] = useState([
    { description: "Someting" },
    { description: "Someting else" },
  ]);
  return (
    <>
      <h1>My tasks</h1>
      <ul>
        {tasks.map((t) => (
          <li>{t.description}</li>
        ))}
      </ul>
      <h2> New Task</h2>
      <form>
        <input type="text" />
        <button>Add task</button>
      </form>
    </>
  );
}
