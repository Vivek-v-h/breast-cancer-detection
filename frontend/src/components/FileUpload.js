import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./FileUpload.css";

const FileUpload = ({ onResult }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setIsUploading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/ultrasound/classify/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onResult(response.data);
      toast.success("Image classified successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error uploading the file.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <button disabled={isUploading} onClick={handleUpload}>
        {isUploading ? "Uploading..." : "Upload and Classify"}
      </button>
    </div>
  );
};

export default FileUpload;
