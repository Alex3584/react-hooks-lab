import { useState, useEffect } from "react";
import Button from "../common/Button/Button";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import "./HooksDemo.scss";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showWindowWidthCode, setShowWindowWidthCode] = useState(false);
  const [showTimerCode, setShowTimerCode] = useState(false);

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

  // Код для примера ширины окна
  const windowWidthCode = `
import { useState, useEffect } from "react";

function WindowWidthDemo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Current Width: {windowWidth}px</p>;
}
  `;

  // Код для примера таймера
  const timerCode = `
import { useState, useEffect } from "react";

function TimerDemo() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleStartTimer = () => setTimer(true);
  const handleStopTimer = () => {
    setTimer(false);
    setCount(0);
  };

  return (
    <div>
      <p>Timer Count: {count}</p>
      <button onClick={handleStartTimer}>Start Timer</button>
      <button onClick={handleStopTimer}>Stop Timer</button>
    </div>
  );
}
  `;

  return (
    <section className="hook-section">
      <h2>useEffect</h2>
      <div className="hook-section__description">
        <p>
          <strong>useEffect</strong> Використовується для виконання побічних
          ефектів у функціональних компонентах, таких як отримання даних або
          підписка на події.
        </p>
        <p>
          Коли ви викликаєте <strong>useEffect</strong>, React отримує вказівку
          запустити вашу функцію з «ефектом» після того, як він відправив зміни
          в DOM. Оскільки ефекти викликаються всередині компонента, у них є
          доступ до його пропозицій і стану. За умовчанням React запускає ефекти
          після кожного рендера, включаючи перший рендер.
        </p>
      </div>
      <div className="hook-section__examples">
        <h3>Ширина вікна</h3>
        <p>
          Змініть розмір вікна браузера, щоб побачити ефект у реальному часі:
        </p>
        <p>
          <strong>Поточна ширина:</strong> {windowWidth}px
        </p>
      </div>

      <Button onClick={() => setShowWindowWidthCode((prev) => !prev)}>
        {showWindowWidthCode ? "Приховати код" : "Показати код"}
      </Button>

      {showWindowWidthCode && <CodeHighlighter code={windowWidthCode} />}

      <div className="hook-section__examples">
        <h3>Таймер з useEffect</h3>
        <div className="hook-section__examples-buttons">
          <Button onClick={handleStartTimer}>Start Timer</Button>
          <Button onClick={handleStopTimer}>Stop Timer</Button>
        </div>
        <p>
          Timer Count: <strong>{count}</strong>
        </p>
      </div>

      <Button onClick={() => setShowTimerCode((prev) => !prev)}>
        {showTimerCode ? "Приховати код" : "Показати код"}
      </Button>
      {showTimerCode && <CodeHighlighter code={timerCode} />}
    </section>
  );
}

export default UseEffectDemo;
