import React from "react";

function Title({ text, children }) {
  return (
    <h1>
      {text}
      {children}
    </h1>
  );
}
function App() {
  return (
    <Title text="Hello React">
      <span>i am the child of App</span>
      <p>I am amended!</p>
    </Title>
  );
}

export default App;
