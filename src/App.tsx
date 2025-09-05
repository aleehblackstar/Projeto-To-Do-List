import { useEffect, useState } from "react";
import ItemTarefa from "./components/ItemTarefa";
import "./style/index.css";
import Tittle from "./components/Tittle";
import ThemeToggler from "./components/ThemeToggler";

interface Tarefa {
  id: number;
  texto: string;
  concluida: boolean;
}

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [entrada, setEntrada] = useState("");

  const [filtro, setFiltro] = useState("all");

  useEffect(() => {
    const armazenadas = localStorage.getItem("tarefas");
    if (armazenadas) {
      setTarefas(JSON.parse(armazenadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa() {
    if (!entrada.trim()) return;
    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: entrada,
      concluida: false,
    };
    setTarefas([novaTarefa, ...tarefas]);
    setEntrada("");
  }

  function alterarTarefa(id: number) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  }

  function excluirTarefa(id: number) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function editarTarefa(id: number, novoTexto: string) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, texto: novoTexto } : t))
    );
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "completed") {
      return tarefa.concluida;
    } else if (filtro === "pending") {
      return !tarefa.concluida;
    } else {
      return true;
    }
  });

  return (
    <div className="conteudoGeral">
      <Tittle />
       <ThemeToggler />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          adicionarTarefa();
        }}
      >
        <div className="entrada">
          <input
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            placeholder="Digite sua tarefa"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <div className="filtros">
        <button
          onClick={() => setFiltro("all")}
          className={filtro === "all" ? "ativo" : ""}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro("pending")}
          className={filtro === "pending" ? "ativo" : ""}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFiltro("completed")}
          className={filtro === "completed" ? "ativo" : ""}
        >
          Concluídas
        </button>
      </div>

      <div className="tarefa">
        {tarefasFiltradas.map((tarefa) => (
          <ItemTarefa
            key={tarefa.id}
            tarefa={tarefa}
            aoAlterar={() => alterarTarefa(tarefa.id)}
            aoExcluir={() => excluirTarefa(tarefa.id)}
            aoEditar={(novoTexto) => editarTarefa(tarefa.id, novoTexto)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
