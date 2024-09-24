import React, { useState } from 'react';
import '../css/announcements.css'
const AnnouncementWidget: React.FC = () => {
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  const handleAddAnnouncement = () => {
    if (newAnnouncement.trim() !== '') {
      setAnnouncements([...announcements, newAnnouncement]);
      setNewAnnouncement('');
    }
  };

  return (
    <div className="announcement-widget">
      <div className="announcement-scroller">
        <div className="announcement-text">
          {announcements.map((announcement, index) => (
            <span key={index}>{announcement}</span>
          ))}
        </div>
      </div>
      <div className="announcement-form">
        <input
          type="text"
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          placeholder="Add new announcement"
        />
        <button onClick={handleAddAnnouncement}>Add</button>
      </div>
    </div>
  );
};

export default AnnouncementWidget;
