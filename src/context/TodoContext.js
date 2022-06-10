import React, { useContext, useState } from "react";

const TodoContext = React.createContext();
// const ChangeTextContext = React.createContext();
// const ButtonContext = React.createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

// export const useChangeText = () => {
//   return useContext(ChangeTextContext);
// };

// export const useButtonContext = () => {
//   return useContext(ButtonContext);
// };

const TodoProvider = ({ children }) => {
  const [items, setItems] = useState(["a", "b", "c"]);
  const [text, setText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const defaultBehaviour = (atribute) => {
    setText("");
    setIsEmpty(atribute);
  };

  const clearText = () => {
    defaultBehaviour(false);
  };

  const sendText = () => {
    if (text.trim().length === 0) {
      defaultBehaviour(true);
      return null;
    }

    setItems((oldItems) => [...oldItems, text]);
    defaultBehaviour(false);
  };

  const changeText = (newText) => {
    setText(newText);
  };

  const todoObject = {
    text,
    changeText,
    clearText,
    sendText,
    isEmpty
  };

  return (
    <TodoContext.Provider value={todoObject}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
