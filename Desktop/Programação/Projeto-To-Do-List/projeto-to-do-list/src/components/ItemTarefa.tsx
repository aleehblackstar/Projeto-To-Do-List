import { useState } from "react"

interface Props{
    tarefa: {
        id: number;
        texto: string;
        concluida: boolean;
    };
    aoAlterar: () => void;
    aoExcluir: () => void;
    aoEditar: (texto:string) => void;
}

const ItemTarefa = () => {
  const [editando, setEditando] = useState(false)
  const [textoEditado, setTextoEditado] = useState(tarefa.texto)

  function ConfirmarEdicao() {
    aoEditar(textoEditado);
    setEditando(false);
  }
  
    return (
    <div>
        {editando? (
            <input value={textoEditado} 
            onChange={e => setTextoEditado (e.target.value) } 
            onBlur={ConfirmarEdicao} 
            autoFocus/> ):
            <span onClick={aoAlterar}>
                {tarefa.texto}
            </span>
        )}
        <div>
            <button onClick={() => setEditando (true)}>Editar</button>
            <button onClick={aoExcluir}>Excluir</button>
        </div>
    </div>
  )
}

export default ItemTarefa