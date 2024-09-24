import React from 'react';
import '../css/settings.css';

type WidgetName = 'GoogleSlide' | 'GoogleSpreadSheet' | 'GoogleMeet' | 'IssueTracker' | 'Checklist' | 'GoogleForm' | 'GoogleCalendar' | 'GoogleKeep' | 'Music' | 'HealthTracker' | 'Chatbot' | 'TILCorner';

interface SettingsProps {
  settings: Record<WidgetName, boolean>;
  onToggle: (widget: WidgetName) => void;
  isOpen: boolean;
  onSettingsToggle: () => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onToggle, isOpen, onSettingsToggle }) => {
  return (
    <div className={`settings ${isOpen ? 'open' : 'closed'}`}>
      <button className="settings-toggle" onClick={onSettingsToggle}>
        {isOpen ? '⮜' : '⮞'}
      </button>
      {isOpen && (
        <div>
          {Object.keys(settings).map((widget) => (
            <div key={widget}>
              <label>
                <input
                  type="checkbox"
                  checked={settings[widget as WidgetName]} // Type assertion to WidgetName
                  onChange={() => onToggle(widget as WidgetName)} // Type assertion to WidgetName
                />
                {' '}{widget}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Settings;
