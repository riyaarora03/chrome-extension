import "../css/googleSlide.css";
import React from "react";
import Card from "../components/card"; // Adjust the import path as needed

const Music: React.FC = () => {
  const handleFormClick = () => {
    window.open("https://gaana.com/", "_blank");
  };

  return (
    <Card title="Music" onClick={handleFormClick}>
      <div className="imageContainer">
        <img
          src="https://media.wired.com/photos/6441cc2e6b2fffe52ad78d24/master/w_1600,c_limit/The-Sludgification-Of-Music-Business-503493283.jpg" 
          alt="Music"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default Music;
