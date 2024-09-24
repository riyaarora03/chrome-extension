import React from "react";
import Card from "../components/card"; // Adjust import path as needed

const GoogleForm: React.FC = () => {
  const handleFormClick = () => {
    window.open("https://docs.google.com/forms/u/0/?tgif=d&ec=asw-forms-hero-goto", "_blank");
  };

  return (
    <Card title="Google Form" onClick={handleFormClick}>
      <div className="imageContainer">
        <img
          src="https://d2e0fzu2c9cj3i.cloudfront.net/wp-content/uploads/2020/04/image-1024x504.png" // Replace with the actual path to your image
          alt="Google Form Preview"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default GoogleForm;
