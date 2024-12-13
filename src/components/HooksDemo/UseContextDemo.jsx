import React, { useState, createContext, useContext } from "react";
import Button from "../common/Button/Button";
import CodeHighlighter from "../common/CodeHighlighter/CodeHighlighter";
import "./HooksDemo.scss";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  const updateUser = (newUser) => {
    setUser((prev) => ({ ...prev, ...newUser }));
  };

  return (
    <AppContext.Provider value={{ user, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};

const UserProfile = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="hook-section__examples">
      <h3>User Profile</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
    </div>
  );
};

const UpdateUser = () => {
  const { updateUser } = useContext(AppContext);

  const handleUpdate = () => {
    updateUser({ name: "Jane Smith", age: 25 });
  };

  return (
    <Button onClick={handleUpdate}>
      Update User
    </Button>
  );
};

function UseContextDemo() {
  const [showCode, setShowCode] = useState(false);

  const contextCode = `
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  const updateUser = (newUser) => {
    setUser((prev) => ({ ...prev, ...newUser }));
  };

  return (
    <AppContext.Provider value={{ user, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};

const UserProfile = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
};

const UpdateUser = () => {
  const { updateUser } = useContext(AppContext);

  const handleUpdate = () => {
    updateUser({ name: "Jane Smith", age: 25 });
  };

  return <button onClick={handleUpdate}>Update User</button>;
};

function UseContextDemo() {
  return (
    <AppProvider>
      <UserProfile />
      <UpdateUser />
    </AppProvider>
  );
}

export default UseContextDemo;
  `;

  return (
    <AppProvider>
      <section className="hook-section">
        <h2>useContext</h2>
        <div className="hook-section__description">
          <p>
            <strong>useContext</strong> Використовується для доступу до значення
            контексту React у функціональних компонентах. Замість того, щоб
            вручну передавати значення через пропси, ви можете отримати його
            безпосередньо з контексту.
          </p>
          <p>
            <strong>useContext</strong> приймає об'єкт контексту, створений
            React.createContext, і повертає його поточне значення. Компонент
            передплачується на зміну цього контексту.
          </p>
        </div>
        <div className="hook-section__examples">
          <UserProfile />
          <UpdateUser />
        </div>

        <Button onClick={() => setShowCode((prev) => !prev)}>
          {showCode ? "Приховати код" : "Показати код"}
        </Button>

        {showCode && <CodeHighlighter code={contextCode} />}
      </section>
    </AppProvider>
  );
}

export default UseContextDemo;
