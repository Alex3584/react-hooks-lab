import React, { useState } from "react";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import "./HooksDemo.scss";

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
    <section className="hook-section">
      <h2>useState</h2>
      <div className="hook-section__description">
        <p>
          <strong>useState</strong> Використовується для керування станом
          функціональних компонентів.
        </p>
        <p>
          Виклик <strong>useState</strong> повертає дві речі: поточне значення
          стану та функцію для його оновлення. Цю функцію можна використовувати
          там, де зручно, наприклад, в обробнику подій. Вона виглядає з{" "}
          <strong>this.setState</strong> у класах, але не сливає новий і старий
          стан разом. Єдиний аргумент <strong>useState</strong> — це початкове
          стан. У прикладі нижче — це 0, так як наш лічильник починається з нуля
        </p>
      </div>

      <div className="hook-section__examples">
        <h3>Лічильник</h3>
        <span className="hook-section__examples-count">{count}</span>
        <div className="hook-section__examples-buttons">
          <Button variant="count" onClick={decrement}>
            -
          </Button>
          <Button variant="count" onClick={increment}>
            +
          </Button>
        </div>
        <Button onClick={reset} variant="reset">
          Reset
        </Button>

        <Button onClick={() => setShowCountCode((prev) => !prev)}>
          {showCountCode ? "Приховати код" : "Показати код"}
        </Button>

        {showCountCode && <CodeHighlighter code={countCode} />}
      </div>

      <div className="hook-section__examples">
        <h3>Text Input</h3>
        <Input
          value={text}
          onChange={handleTextChange}
          placeholder="Введіть текст"
        />
        <p>
          Ви написали: <strong>{text}</strong>
        </p>

        <Button onClick={() => setShowInputCode((prev) => !prev)}>
          {showInputCode ? "Приховати код" : "Показати код"}
        </Button>

        {showInputCode && <CodeHighlighter code={inputCode} />}
      </div>
    </section>
  );
}

export default UseStateDemo;
