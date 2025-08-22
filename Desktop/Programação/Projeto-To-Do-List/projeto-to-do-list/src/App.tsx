import { useEffect, useState } from 'react';
import './App.css'

interface Tarefa{
  id: number;
  texto: string;
  concluida: boolean
}

function App() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [entrada, setEntrada] = useState("");

  useEffect(() => {
    const armazenadas = localStorage.getItem("tarefas")
    if (armazenadas) {
      setTarefas(JSON.parse(armazenadas))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas",JSON.stringify(tarefas))
  }, [tarefas]);

  function adicionarTarefa() {
    if (!entrada.trim()) return
    const novaTarefa: Tarefa = {
      id: Date.now(),
      texto: entrada,
      concluida: false,

    };
    setTarefas([...tarefas, novaTarefa])
    setEntrada("")
  }

  return (
    <>
      
    </>
  )
}

export default App
