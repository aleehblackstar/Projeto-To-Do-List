import { useState } from "react";

interface Props {
  tarefa: {
    id: number;
    texto: string;
    concluida: boolean;
  };
  aoAlterar: () => void;
  aoExcluir: () => void;
  aoEditar: (texto: string) => void;
}

const ItemTarefa = ({ tarefa, aoAlterar, aoExcluir, aoEditar }: Props) => {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarefa.texto);

  function ConfirmarEdicao() {
    if (textoEditado.trim() !== "") {
      aoEditar(textoEditado);
    }
    setEditando(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      ConfirmarEdicao();
    }
  }

  return (
    <div className="tarefa-item">
      <div className="conteudo">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={aoAlterar}
        />
        {editando ? (
          <input
            value={textoEditado}
            onChange={(e) => setTextoEditado(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span
            style={{
              textDecoration: tarefa.concluida ? "line-through" : "none",
            }}
            onClick={aoAlterar}
          >
            {tarefa.texto}
          </span>
        )}
      </div>

      <div className="acoes">
        {editando ? (
          <button onClick={ConfirmarEdicao}>Alterar</button>
        ) : (
          <button onClick={() => setEditando(true)}>Editar</button>
        )}
        <button onClick={aoExcluir}>Excluir</button>
      </div>
    </div>
  );
};

export default ItemTarefa;
