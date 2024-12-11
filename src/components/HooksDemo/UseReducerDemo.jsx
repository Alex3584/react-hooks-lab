import React, { useReducer, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Редьюсер для управления состоянием
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showCode, setShowCode] = useState(false);

  const reducerCode = `
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error(\`Unknown action type: \${action.type}\`);
  }
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Counter with useReducer</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerDemo;
  `;

  return (
    <>
      <h2>useReducer</h2>
      <p>
        <strong>useReducer</strong> is a React hook that provides an alternative
        to `useState` for managing more complex state logic. It is particularly
        useful when the state depends on multiple actions or when the next state
        depends on the previous one.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Counter with useReducer</h3>
        <p>Count: {state.count}</p>
        <button
          onClick={() => dispatch({ type: "increment" })}
          style={{ marginRight: "1rem" }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          style={{ marginRight: "1rem" }}
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </section>

      <button
        onClick={() => setShowCode((prev) => !prev)}
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
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {showCode && (
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
          {reducerCode}
        </SyntaxHighlighter>
      )}
    </>
  );
}

export default UseReducerDemo;
