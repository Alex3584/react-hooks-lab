import React, { useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Дочерний компонент
const ChildComponent = React.memo(({ handleIncrement }) => {
  console.log("Child rendered");
  return (
    <button onClick={handleIncrement} style={{ marginTop: "1rem" }}>
      Increment Count
    </button>
  );
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Используем useCallback для мемоизации функции
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

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

  return (
    <>
      <h2>useCallback</h2>
      <p>
        <strong>useCallback</strong> memoizes a function, ensuring that it does
        not get recreated unless its dependencies change. It is particularly
        useful when passing functions to memoized child components to prevent
        unnecessary re-renders.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Optimized Function with useCallback</h3>
        <p>Count: {count}</p>
        <ChildComponent handleIncrement={handleIncrement} />
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
        {callbackCode}
      </SyntaxHighlighter>
    </>
  );
}

export default UseCallbackDemo;
