import React, { useState, createContext, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Создаем контекст
const AppContext = createContext();

// Компонент провайдера
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

// Компонент, который потребляет контекст
const UserProfile = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
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

// Компонент для обновления данных пользователя
const UpdateUser = () => {
  const { updateUser } = useContext(AppContext);

  const handleUpdate = () => {
    updateUser({ name: "Jane Smith", age: 25 });
  };

  return (
    <button onClick={handleUpdate} style={{ marginTop: "1rem" }}>
      Update User
    </button>
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
      <h2>useContext</h2>
      <p>
        <strong>useContext</strong> allows components to consume and subscribe
        to context changes. It provides a way to share state globally across the
        component tree without prop drilling.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <UserProfile />
        <UpdateUser />
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
          {contextCode}
        </SyntaxHighlighter>
      )}
    </AppProvider>
  );
}

export default UseContextDemo;
