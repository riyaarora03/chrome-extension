import React from "react";
import Card from "../components/card"; // Adjust the import path as needed

const GoogleKeep: React.FC = () => {
  const handleKeepClick = () => {
    window.open("https://keep.google.com/u/0/", "_blank");
  };

  return (
    <Card title="Google Keep" onClick={handleKeepClick}>
      <div className="imageContainer">
        <img
          src="https://addons.mozilla.org/user-media/previews/full/252/252841.png?modified=1622132846" 
          alt="Google Keep Preview"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default GoogleKeep;
