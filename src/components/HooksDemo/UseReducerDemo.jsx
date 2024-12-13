import React, { useReducer, useState } from "react";
import Button from "../common/Button/Button";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import "./HooksDemo.scss";

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
    <section className="hook-section">
      <h2>useReducer</h2>
      <div className="hook-section__description">
        <p>
          <strong>useReducer</strong> - використовується для керування станом
          складних компонентів за допомогою функції редуктора.
        </p>
        <p>
          <strong>useReducer</strong> приймає редуктор (функцію для оновлення
          стану) і початковий стан. Повертає поточний стан і функцію{" "}
          <strong>dispatch</strong> для виклику дій.
        </p>
      </div>
      <div className="hook-section__examples">
        <h3>Лічильник за допомогою useReducer</h3>
        <p>
          Лічильник: <strong>{state.count}</strong>
        </p>
        <div className="hook-section__examples-buttons">
          <Button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </Button>
          <Button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </Button>
          <Button onClick={() => dispatch({ type: "reset" })} variant="reset">
            Reset
          </Button>
        </div>
      </div>

      <Button onClick={() => setShowCode((prev) => !prev)}>
        {showCode ? "Приховати код" : "Показати код"}
      </Button>

      {showCode && <CodeHighlighter code={reducerCode} />}
    </section>
  );
}

export default UseReducerDemo;
