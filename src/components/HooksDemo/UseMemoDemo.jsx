import React, { useState, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Пример: Тяжелая вычислительная функция
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1e7; i++) {} // Имитируем тяжелый процесс
    return num * 2;
  };

  // Оптимизация с помощью useMemo
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const memoCode = `
import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1e7; i++) {}
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h3>Optimized Calculation with useMemo</h3>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>

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

export default UseMemoDemo;
  `;

  return (
    <>
      <h2>useMemo</h2>
      <p>
        <strong>useMemo</strong> is a React hook that memoizes the result of a
        calculation and recomputes it only when its dependencies change. It is
        useful for optimizing expensive computations or avoiding unnecessary
        recalculations.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Optimized Calculation with useMemo</h3>
        <p>Count: {count}</p>
        <p>Memoized Value: {memoizedValue}</p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{ marginRight: "1rem" }}
        >
          Increment Count
        </button>
      </section>

      <section>
        <h3>Unrelated State Update</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something"
        />
        <p>You typed: {text}</p>
      </section>

      <button
        onClick={() => setText((prev) => !prev)}
        style={{
          marginTop: "1rem",
          padding: "0.5rem",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          border: "1px solid #444",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Show Code
      </button>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "4px",
          backgroundColor: "#1e1e1e",
          color: "#fff",
        }}
      >
        {memoCode}
      </SyntaxHighlighter>
    </>
  );
}

export default UseMemoDemo;
