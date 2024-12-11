import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showCountCode, setShowCountCode] = useState(false);
  const [showInputCode, setShowInputCode] = useState(false);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  const handleTextChange = (e) => setText(e.target.value);

  const countCode = `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
  `;

  const inputCode = `
import { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => setText(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
      <p>You typed: {text}</p>
    </div>
  );
}
  `;

  return (
    <>
      <h2>useState</h2>
      <p>
        <strong>useState</strong> Використовується для керування станом
        функціональних компонентів.
      </p>
      <p>
        Виклик <strong>useState</strong> повертає дві речі: поточне значення
        стану та функцію для його оновлення. Цю функцію можна використовувати
        там, де зручно, наприклад, в обробнику подій. Вона виглядає з
        <strong> this.setState</strong> у класах, але не сливає новий і старий
        стан разом. Єдиний аргумент <strong>useState</strong> — це початкове
        стан. У прикладі нижче — це 0, так як наш лічильник починається з нуля.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Counter</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={decrement}>-</button>
          <span style={{ fontSize: "1.5rem" }}>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <button onClick={reset} style={{ marginTop: "0.5rem" }}>
          Reset
        </button>

        <button
          onClick={() => setShowCountCode((prev) => !prev)}
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
          {showCountCode ? "Hide Code" : "Show Code"}
        </button>

        {showCountCode && (
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
            {countCode}
          </SyntaxHighlighter>
        )}
      </section>

      <section>
        <h3>Text Input</h3>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text"
        />
        <p style={{ marginTop: "0.5rem" }}>You typed: {text}</p>

        <button
          onClick={() => setShowInputCode((prev) => !prev)}
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
          {showInputCode ? "Hide Code" : "Show Code"}
        </button>

        {showInputCode && (
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
            {inputCode}
          </SyntaxHighlighter>
        )}
      </section>
    </>
  );
}

export default UseStateDemo;
