import React, { useState, useEffect } from 'react';
import '../css/healthtracker.css';
import Card from '../components/card'

// Define the StepData interface
interface StepData {
  id: number;
  date: string;
  steps: number;
}

const HealthTracker: React.FC = () => {
  const [steps, setSteps] = useState<number>(0);
  const [stepRecords, setStepRecords] = useState<StepData[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    // Load step records from localStorage
    const storedRecords = localStorage.getItem('stepRecords');
    if (storedRecords) {
      setStepRecords(JSON.parse(storedRecords));
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever stepRecords changes
    localStorage.setItem('stepRecords', JSON.stringify(stepRecords));
  }, [stepRecords]);

  const handleAddRecord = (event: React.FormEvent) => {
    event.preventDefault();
    if (steps <= 0) return; // Prevent adding records with 0 or negative steps

    const newRecord: StepData = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      steps,
    };

    setStepRecords([...stepRecords, newRecord]);
    setSteps(0);
  };

  const handleEditRecord = (record: StepData) => {
    setSteps(record.steps);
    setIsEditing(true);
    setEditId(record.id);
  };

  const handleSaveEdit = () => {
    if (editId !== null) {
      const updatedRecords = stepRecords.map((record) =>
        record.id === editId ? { ...record, steps } : record
      );
      setStepRecords(updatedRecords);
      setSteps(0);
      setIsEditing(false);
      setEditId(null);
    }
  };

  const handleReset = () => {
    setStepRecords([]);
    localStorage.removeItem('stepRecords');
  };

  return (
    <div>
    <Card title="Steps Tracker" onClick={() => {}}>
      <form onSubmit={isEditing ? (e) => { e.preventDefault(); handleSaveEdit(); } : handleAddRecord}>
        <div>
          <label>Steps:</label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(Number(e.target.value))}
            min="0"
            required
          />
        </div>
        <button type="submit">{isEditing ? 'Save' : 'Add'}</button>
        {isEditing && <button type="button" onClick={() => { setIsEditing(false); setSteps(0); setEditId(null); }}>Cancel</button>}
      </form>
      <button onClick={handleReset} className="reset-button">Reset Records</button>
      {isEditing && (
        <>
          <ul>
            {stepRecords
              .filter(record => record.id === editId)
              .map(record => (
                <li key={record.id}>
                  <span>{record.date}: {record.steps} steps</span>
                  <button onClick={() => handleEditRecord(record)}>Edit</button>
                </li>
              ))}
          </ul>
        </>
        
      )}
      </Card>
    </div>
  );
};

export default HealthTracker;
