import React from "react";
import "./App.css";
import DogGenerator from "./components/DogGenerator";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-light text-gray-800">
        Cardona Integration Assessment
      </h1>
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Dog Generator</h1>
      <DogGenerator />
    </div>
  );
}

export default App;
