import React from "react";

function ErrorMessage({ message }) {
  return (
    <div
      style={{
        backgroundColor: "#afb7b9",
        width: "100vw",
        height: "100vh",
        color: "#4e5a5b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
      }}
    >
      {message}
    </div>
  );
}

export default ErrorMessage;
