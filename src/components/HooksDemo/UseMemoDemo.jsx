import React, { useState, useMemo } from "react";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import "./HooksDemo.scss";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showCalcCode, setShowCalcCode] = useState(false);
  const [showTextCode, setShowTextCode] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1e7; i++) {}
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const reset = () => {
    setCount(0);
    setText("");
  };

  const calcCode = `
import { useState, useMemo } from "react";

function UseMemoCalculation() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1e7; i++) {}
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
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
      <h2>useMemo</h2>
      <div className="hook-section__description">
        <p>
          <strong>useMemo</strong> - використовується для оптимізації
          продуктивності, кешуючи результати обчислень.
        </p>
        <p>
          <strong>useMemo</strong> запам’ятовує результат обчислень і обчислює
          його заново тільки тоді, коли змінюються залежності.
        </p>
      </div>

      <div className="hook-section__examples">
        <h3>Оптимізований розрахунок за допомогою useMemo</h3>
        <p>
          <strong>Лічильник:</strong> {count}
        </p>
        <p>
          <strong>Мемоізоване значення:</strong> {memoizedValue}
        </p>
        <div className="hook-section__examples-buttons">
          <Button onClick={() => setCount((prev) => prev + 1)}>
            Increment Count
          </Button>
          <Button variant="reset" onClick={reset}>
            Reset
          </Button>
        </div>
        <Button onClick={() => setShowCalcCode((prev) => !prev)}>
          {showCalcCode ? "Приховати код" : "Показати код"}
        </Button>
        {showCalcCode && <CodeHighlighter code={calcCode} />}
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

export default UseMemoDemo;
