import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import Results from "./components/Results";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";

const App = () => {
  const [result, setResult] = useState(null);

  const handleResult = (data) => {
    setResult(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Ultrasound Image Classifier</h1>
      <FileUpload onResult={handleResult} />
      <Results result={result} />
      <ToastContainer />
    </div>
  );
};

export default App;
