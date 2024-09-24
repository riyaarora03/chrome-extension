import "../css/googleSlide.css";
import React from "react";
import Card from "../components/card"; // Adjust the import path as needed

const GoogleMeet: React.FC = () => {
  const handleMeetClick = () => {
    window.open("https://meet.google.com", "_blank");
  };

  return (
    <Card title="Google Meet" onClick={handleMeetClick}>
      <div className="imageContainer">
        <img
          src="https://cdn.classpoint.io/wp-content/uploads/blogThumbnail_gmet.jpg" // Replace with the actual path to your image
          alt="Google Meet Preview"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default GoogleMeet;
