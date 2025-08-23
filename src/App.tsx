import React from "react";
import "./styles.css";

const ToDoList: React.FC = () => {
  return (
    <div className="app">
      <h1 className="title">To Do List</h1>

      {/* Input + botão */}
      <div className="add-task">
        <input type="text" placeholder="Digite uma nova tarefa..." />
        <button className="btn-add">Adicionar</button>
      </div>

      {/* Filtros */}
      <div className="filters">
        <button className="filter active">Todas</button>
        <button className="filter">Pendentes</button>
        <button className="filter">Concluídas</button>
      </div>

      {/* Lista de tarefas */}
      <div className="task-list">
        <div className="card task">
          <label>
            <input type="checkbox" />
            <span className="text-primary">Exemplo de tarefa 1</span>
          </label>
          <button className="btn-delete">X</button>
        </div>

        <div className="card task">
          <label>
            <input type="checkbox" checked />
            <span className="text-secondary">Exemplo de tarefa concluída</span>
          </label>
          <button className="btn-delete">X</button>
        </div>
      </div>

      {/* Contadores */}
      <div className="counters text-secondary">
        <p>Total: 2</p>
        <p>Pendentes: 1</p>
        <p>Concluídas: 1</p>
      </div>
    </div>
  );
};

export default ToDoList;
