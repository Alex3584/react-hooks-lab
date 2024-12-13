import React, { useState, useRef } from "react";
import Button from "../common/Button/Button";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import Input from "../common/Input/Input";
import "./HooksDemo.scss";

function UseRefDemo() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [showDomCode, setShowDomCode] = useState(false);
  const [showRefCode, setShowRefCode] = useState(false);

  const incrementRef = () => {
    countRef.current += 1;
    alert(`Current ref count: ${countRef.current}`);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const reset = () => {
    countRef.current = 0;
    alert("Ref count has been reset to 0.");
  };

  const domCode = `
import React, { useRef } from "react";

function DOMManipulationWithUseRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
  `;

  const refCode = `
import React, { useRef } from "react";

function PersistentValueWithUseRef() {
  const countRef = useRef(0);

  const incrementRef = () => {
    countRef.current += 1;
    alert(\`Current ref count: \${countRef.current}\`);
  };

  return (
    <div>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}
  `;

  return (
    <section className="hook-section">
      <h2>useRef</h2>
      <div className="hook-section__description">
        <p>
          <strong>useRef</strong> - використовується для створення посилань на
          елементи DOM або для зберігання значень, які не викликають повторного
          рендеру.
        </p>
        <p>
          <strong>useRef</strong> повертає об'єкт, який зберігається між
          рендерами. Ви можете використовувати його для доступу до елементів DOM
          або для збереження значень.
        </p>
      </div>

      <div className="hook-section__examples">
        <h3>Маніпуляції DOM з використанням useRef</h3>
        <Input
          ref={inputRef}
          placeholder="Натисніть кнопку, щоб сфокусувати на мене!"
        />
        <Button onClick={focusInput}>Focus Input</Button>
        <Button onClick={() => setShowDomCode((prev) => !prev)}>
          {showDomCode ? "Приховати код" : "Показати код"}
        </Button>
        {showDomCode && <CodeHighlighter code={domCode} />}
      </div>

      <div className="hook-section__examples">
        <h3>Постійне значення з useRef</h3>
        <div className="hook-section__examples-buttons">
          <Button onClick={incrementRef}>Increment Ref</Button>
          <Button
            variant="reset"
            onClick={reset}
            style={{ marginLeft: "1rem" }}
          >
            Reset
          </Button>
        </div>
        <p>Натисніть кнопку, щоб побачити поточну кількість посилань.</p>
        <Button onClick={() => setShowRefCode((prev) => !prev)}>
          {showRefCode ? "Приховати код" : "Показати код"}
        </Button>
        {showRefCode && <CodeHighlighter code={refCode} />}
      </div>
    </section>
  );
}

export default UseRefDemo;
