import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeHighlighter({ code }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        marginTop: "16px",
        padding: "16px",
        borderRadius: "4px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeHighlighter;
