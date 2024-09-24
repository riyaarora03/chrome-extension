import React, { useState } from 'react';
import GoogleSlide from './widgets/GoogleSlide';
import Timer from './widgets/Timer';
import GoogleSpreadSheet from './widgets/GoogleSheet';
import GoogleMeet from './widgets/GoogleMeet';
import GoogleForm from './widgets/GoogleForm';
import Music from './widgets/music';
import Chatbot from './widgets/Chatbot';
import GoogleCalendar from './widgets/GoogleCalendar';
import GoogleKeep from './widgets/GoogleKeep';
import Sidebar from './components/sidebar';
import Settings from './components/Settings';

import '../src/css/slider.css';
import '../src/css/app.css';
import IssueTracker from './widgets/IssueTracker';
import HealthTracker from './widgets/HealthTracker';
import Checklist from './widgets/Growth';
import TILCorner from './widgets/TILcorner';


type WidgetName = 'GoogleSlide' | 'GoogleSpreadSheet' | 'GoogleMeet' | 'IssueTracker' | 'Checklist' | 'GoogleForm' | 'GoogleCalendar' | 'GoogleKeep' | 'Music' | 'HealthTracker' | 'Chatbot' | 'TILCorner';

const App: React.FC = () => {
  const [widgetSettings, setWidgetSettings] = useState<Record<WidgetName, boolean>>({
    GoogleSlide: true,
    GoogleSpreadSheet: true,
    GoogleMeet: true,
    IssueTracker: true,
    Checklist: true,
    GoogleForm: true,
    GoogleCalendar: true,
    GoogleKeep: true,
    Music: true,
    HealthTracker: true,
    Chatbot: true,
    TILCorner:true,
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleToggle = (widget: WidgetName) => {
    setWidgetSettings((prevSettings) => ({
      ...prevSettings,
      [widget]: !prevSettings[widget],
    }));
  };

  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="Apps">
      <Sidebar />
      <div className="main-content">
      <header className="header">
        <h1>Explore Widgets</h1>
      </header>
        <Settings settings={widgetSettings} onToggle={handleToggle} isOpen={isSettingsOpen} onSettingsToggle={handleSettingsToggle} />
        <div className="card-container">
          {widgetSettings.GoogleSlide && <GoogleSlide />}
          {widgetSettings.GoogleSpreadSheet && <GoogleSpreadSheet />}
          {widgetSettings.GoogleMeet && <GoogleMeet />}
          {widgetSettings.IssueTracker && <IssueTracker />}
          {widgetSettings.Checklist && <Checklist />}
          {widgetSettings.GoogleForm && <GoogleForm />}
          {widgetSettings.GoogleCalendar && <GoogleCalendar />}
          {widgetSettings.GoogleKeep && <GoogleKeep />}
          {widgetSettings.Music && <Music />}
          {widgetSettings.HealthTracker && <HealthTracker />}
          {widgetSettings.Chatbot && <Chatbot />}
          {widgetSettings.Chatbot && <TILCorner />}
        </div>
      </div>
    </div>
  );
};

export default App;
