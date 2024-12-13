import React, { useState, useLayoutEffect, useRef } from "react";
import Button from "../common/Button/Button";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import "./HooksDemo.scss";

function UseLayoutEffectDemo() {
  const [boxWidth, setBoxWidth] = useState(0);
  const [showDomCode, setShowDomCode] = useState(false);
  const [showMeasureCode, setShowMeasureCode] = useState(false);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = "lightblue";
    }
  }, []);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const width = boxRef.current.getBoundingClientRect().width;
      setBoxWidth(width);
    }
  }, []);

  const domCode = `
import React, { useLayoutEffect, useRef } from "react";

function DOMManipulationWithUseLayoutEffect() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = "lightblue";
    }
  }, []);

  return <div ref={boxRef} style={{ height: "100px", width: "200px" }} />;
}
  `;

  const measureCode = `
import React, { useLayoutEffect, useRef, useState } from "react";

function MeasureElementWithUseLayoutEffect() {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const width = boxRef.current.getBoundingClientRect().width;
      setBoxWidth(width);
    }
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ height: "100px", width: "200px", background: "lightgrey" }} />
      <p>Box width: {boxWidth}px</p>
    </div>
  );
}
  `;

  return (
    <section className="hook-section">
      <h2>useLayoutEffect</h2>
      <div className="hook-section__description">
        <p>
          <strong>useLayoutEffect</strong> - подібний до{" "}
          <strong>useEffect</strong>, але виконується синхронно після оновлення
          DOM.
        </p>
        <p>
          <strong>useLayoutEffect</strong> корисний для обчислень, які залежать
          від розмірів DOM або позиції елементів.
        </p>
      </div>

      <div className="hook-section__examples">
        <h3>Приклад: Зміна фону блоку</h3>
        <div
          ref={boxRef}
          style={{
            height: "100px",
            width: "200px",
            marginBottom: "1rem",
          }}
        />
        <p>Цей блок змінив свій фон за допомогою useLayoutEffect.</p>
        <Button onClick={() => setShowDomCode((prev) => !prev)}>
          {showDomCode ? "Приховати код" : "Показати код"}
        </Button>
        {showDomCode && <CodeHighlighter code={domCode} />}
      </div>

      <div className="hook-section__examples">
        <h3>Приклад: Вимірювання ширини елемента</h3>
        <div
          style={{
            height: "100px",
            width: "200px",
            background: "lightgrey",
            marginBottom: "1rem",
          }}
          ref={boxRef}
        />
        <p>
          Ширина блока: <strong>{boxWidth}px</strong>
        </p>
        <Button onClick={() => setShowMeasureCode((prev) => !prev)}>
          {showMeasureCode ? "Приховати код" : "Показати код"}
        </Button>
        {showMeasureCode && <CodeHighlighter code={measureCode} />}
      </div>
    </section>
  );
}

export default UseLayoutEffectDemo;
