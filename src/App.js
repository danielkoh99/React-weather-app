import React from "react";
import "./App.css";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: "center" }}> React Weather App </h1>{" "}
      </header>{" "}
      <main>
        <Weather />
      </main>{" "}
      <footer> </footer>{" "}
    </div>
  );
};
export default App;
