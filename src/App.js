import "./styles.css";
import Input from "./components/Input";
import { useTodo } from "./context/TodoContext";
import Items from "./components/Items";
export default function App() {
  // const buttonHandler = useButtonContext();
  const { clearText, sendText, isEmpty } = useTodo();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input />
      <button id="limpar" onClick={clearText}>
        Limpar
      </button>
      <button id="enviar" onClick={sendText}>
        Enviar
      </button>

      {isEmpty && (
        <div className="warning">
          <span>Não é possível inserir um texto vazio</span>
        </div>
      )}
      <ul>
        <Items />
      </ul>
    </div>
  );
}
