import { useTodo } from "../context/TodoContext";

const Input = () => {
  // const [text, setText] = useState("");

  const { text, changeText } = useTodo();

  // const text = useText();
  // const changeText = useChangeText();

  return (
    <input
      value={text}
      onChange={(e) => {
        changeText(e.target.value);
      }}
    ></input>
  );
};

export default Input;
