import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showCode, setShowCode] = useState(false);

  // Пример 1: Реальное время отображения ширины окна
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Очистка эффекта
  }, []);

  // Пример 2: Выполнение эффекта только один раз
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Пример 3: Эффект с очисткой
  useEffect(() => {
    if (timer) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval); // Очистка эффекта
    }
  }, [timer]);

  const handleStartTimer = () => setTimer(true);
  const handleStopTimer = () => {
    setTimer(false);
    setCount(0);
  };

  const effectCode = `
import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Пример 1: Реальное время отображения ширины окна
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h3>Window Width</h3>
      <p>Current Width: {windowWidth}px</p>
    </div>
  );
}
  `;

  return (
    <>
      <h2>useEffect</h2>
      <p>
        <strong>useEffect</strong> is a React hook that lets you perform side
        effects in functional components. It can run after every render, on
        specific state changes, or only once when the component mounts.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h3>Window Width</h3>
        <p>Resize the browser window to see the effect in real-time:</p>
        <p>Current Width: {windowWidth}px</p>
      </section>

      <section>
        <h3>Timer with useEffect</h3>
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={handleStartTimer} style={{ marginRight: "1rem" }}>
            Start Timer
          </button>
          <button onClick={handleStopTimer}>Stop Timer</button>
          <p>Timer Count: {count}</p>
        </div>
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
          {effectCode}
        </SyntaxHighlighter>
      )}
    </>
  );
}

export default UseEffectDemo;
