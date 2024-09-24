import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timer from '../widgets/Timer';
import '../css/slider.css';
import AnnouncementWidget from '../widgets/Anouncement';

const SidebarContainer = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: fixed;
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  font-size: 0.8em;
`;

const DateTimeDisplay = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Sidebar: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <SidebarContainer>
      <DateTimeDisplay>
        <div>{formattedDate}</div>
        <div style={{ marginTop: '10px' , fontSize: '2em', color:'red' }}>{formattedTime}</div>
      </DateTimeDisplay>
      <div>
        <AnnouncementWidget/>
      </div>
      <div className='Apps'>
        <div className="main-container center">
          <div className="circle-container center">
            <Timer/>
          </div>
        </div>
      </div>
      <SidebarFooter>© 2025 passouts WE Jiitians</SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
