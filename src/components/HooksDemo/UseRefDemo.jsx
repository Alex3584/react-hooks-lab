import React, { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function UseRefDemo() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const countRef = useRef(0);

  // Увеличиваем реф-счетчик
  const incrementRef = () => {
    countRef.current += 1;
    alert(`Current ref count: ${countRef.current}`);
  };

  // Фокус на input
  const focusInput = () => {
    inputRef.current.focus();
  };

  const refCode = `
import React, { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  const incrementRef = () => {
    countRef.current += 1;
    alert(\`Current ref count: \${countRef.current}\`);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>DOM Manipulation with useRef</h3>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>

      <h3>Persistent Value with useRef</h3>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}

export default UseRefDemo;
  `;

  return (
    <>
      <h2>useRef</h2>
      <p>
        <strong>useRef</strong> is a React hook that creates a mutable object
        whose `.current` property persists across renders. It is often used to
        access DOM elements or to persist values without causing re-renders.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h3>DOM Manipulation with useRef</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="Click the button to focus me!"
          style={{
            display: "block",
            marginBottom: "1rem",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button onClick={focusInput} style={{ marginBottom: "1rem" }}>
          Focus Input
        </button>
      </section>

      <section>
        <h3>Persistent Value with useRef</h3>
        <button onClick={incrementRef} style={{ marginRight: "1rem" }}>
          Increment Ref
        </button>
        <p>Click the button to see the current ref count.</p>
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
        {refCode}
      </SyntaxHighlighter>
    </>
  );
}

export default UseRefDemo;
