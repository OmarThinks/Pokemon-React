import React from "react";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        background: "cyan",
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
      }}
    >
      <p
        style={{
          padding: 0,
          margin: 0,
          background: "red",
        }}
      >
        Hey
      </p>

      <div
        style={{
          flex: 1,
        }}
      />
      <p
        style={{
          padding: 0,
          margin: 0,
          marginTop: "auto",
          //alignSelf: "flex-end",
          background: "magenta",
        }}
      >
        Hey
      </p>
    </div>
  );
}

export default App;
