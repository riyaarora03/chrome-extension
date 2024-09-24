import React from "react";
import Card from "../components/card";

const Chatbot: React.FC = () => {
  const handleBotClick = () => {
    window.open("https://chatgpt.com/", "_blank");
  };

  return (
    <Card title="Chatbot" onClick={handleBotClick}>
      <div className="imageContainer">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6467052ad97b80cf1341e295/A-Short-History-Of-ChatGPT--How-We-Got-To-Where-We-Are-Today/960x0.jpg?format=jpg&width=1440" // Replace with the actual path to your image
          alt="Chatbot"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default Chatbot;
