import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div>
      <h1>ToDo List</h1>
      <p>Bem-vindo ao projeto! 🚀</p>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}