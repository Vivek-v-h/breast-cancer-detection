import React from "react";
import "./Results.css";

const Results = ({ result }) => {
  if (!result) {
    return null; // Return nothing if result is null or undefined
  }


  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Classification Result</h3>
      <p><strong>Prediction:</strong> {result.prediction || "Unknown"}</p>
      
      
    </div>
  );
};

export default Results;
