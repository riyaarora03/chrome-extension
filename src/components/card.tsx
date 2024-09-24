import React from 'react';
import '../css/card.css'; // Ensure you have this CSS file for styling

interface CardProps {
  children: React.ReactNode;
  title: string; // Add a title prop
  onClick: () => void; // Add an onClick prop for handling navigation
}

const Card: React.FC<CardProps> = ({ children, title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3> {/* Display the title */}
      </div>
      {children}
    </div>
  );
};

export default Card;
