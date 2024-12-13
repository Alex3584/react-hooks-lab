import React, { useState, useCallback } from "react";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import "./HooksDemo.scss";

const ChildComponent = React.memo(({ handleIncrement }) => {
  console.log("Child rendered");
  return <Button onClick={handleIncrement}>Increment Count</Button>;
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showCallbackCode, setShowCallbackCode] = useState(false);
  const [showTextCode, setShowTextCode] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const reset = () => {
    setCount(0);
    setText("");
  };

  const callbackCode = `
import React, { useState, useCallback } from "react";

// Дочерний компонент
const ChildComponent = React.memo(({ handleIncrement }) => {
  console.log("Child rendered");
  return <button onClick={handleIncrement}>Increment Count</button>;
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>Optimized Function with useCallback</h3>
      <p>Count: {count}</p>
      <ChildComponent handleIncrement={handleIncrement} />

      <h3>Unrelated State Update</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default UseCallbackDemo;
  `;

  const textCode = `
import { useState } from "react";

function UnrelatedStateUpdate() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>You typed: {text}</p>
    </div>
  );
}
  `;

  return (
    <section className="hook-section">
      <h2>useCallback</h2>
      <div className="hook-section__description">
        <p>
          <strong>useCallback</strong> - використовується для запам’ятовування
          функцій, щоб уникнути їх створення під час кожного рендеру..
        </p>
        <p>
          <strong>useCallback</strong> повертає мемоізовану версію функції, яка
          змінюється лише тоді, коли змінюються залежності.
        </p>
      </div>

      <div className="hook-section__examples">
        <h3>Оптимізована функція з використанням useCallback</h3>
        <p>
          <strong>Лічильник:</strong> {count}
        </p>
        <div className="hook-section__examples-buttons">
          <ChildComponent handleIncrement={handleIncrement} />
          <Button variant="reset" onClick={reset}>
            Reset
          </Button>
        </div>
        <Button onClick={() => setShowCallbackCode((prev) => !prev)}>
          {showCallbackCode ? "Приховати код" : "Показати код"}
        </Button>
        {showCallbackCode && <CodeHighlighter code={callbackCode} />}
      </div>

      <div className="hook-section__examples">
        <h3>Непов'язане оновлення стану</h3>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введіть щось"
        />
        <p>
          Ви написали: <strong>{text}</strong>
        </p>
        <Button onClick={() => setShowTextCode((prev) => !prev)}>
          {showTextCode ? "Приховати код" : "Показати код"}
        </Button>
        {showTextCode && <CodeHighlighter code={textCode} />}
      </div>
    </section>
  );
}

export default UseCallbackDemo;
