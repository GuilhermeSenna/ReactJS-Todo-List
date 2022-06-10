import React, { useContext, useState } from "react";

const TextContext = React.createContext();
const ChangeTextContext = React.createContext();
const ButtonContext = React.createContext();

export const useText = () => {
  return useContext(TextContext);
};

export const useChangeText = () => {
  return useContext(ChangeTextContext);
};

export const useButtonContext = () => {
  return useContext(ButtonContext);
};

const TodoProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const clearText = () => {
    setText("");
    setIsEmpty(false);
  };

  const sendText = () => {
    text.trim().length === 0 ? setIsEmpty(true) : setIsEmpty(false);
    // Send text
    setText("");
  };

  const changeText = (newText) => {
    setText(newText);
  };

  const buttonObject = {
    clearText,
    sendText,
    isEmpty
  };

  return (
    <TextContext.Provider value={text}>
      <ChangeTextContext.Provider value={changeText}>
        <ButtonContext.Provider value={buttonObject}>
          {children}
        </ButtonContext.Provider>
      </ChangeTextContext.Provider>
    </TextContext.Provider>
  );
};

export default TodoProvider;
