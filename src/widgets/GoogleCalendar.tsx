import React from "react";
import Card from "../components/card"; // Adjust the import path as needed

const GoogleCalendar: React.FC = () => {
  const handleCalendarClick = () => {
    window.open("https://calendar.google.com/calendar/u/0/r/day", "_blank");
  };

  return (
    <Card title="Google Calendar" onClick={handleCalendarClick}>
      <div className="imageContainer">
        <img
          src="https://www.dianamarinova.com/wp-content/uploads/2013/09/Google-Calendar-week-view.png" 
          alt="Google Calendar Preview"
          width={300}
          height={200}
        />
      </div>
    </Card>
  );
};

export default GoogleCalendar;
