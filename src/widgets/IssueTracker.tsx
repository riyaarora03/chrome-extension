import React, { useState, useEffect } from 'react';
import Card from '../components/card'; // Adjust the import path as needed
import '../css/IssueTracker.css';

interface Issue {
  id: number;
  title: string;
  description: string;
}

const IssueTracker: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    // Load issues from localStorage when the component mounts
    const storedIssues = localStorage.getItem('issues');
    if (storedIssues) {
      setIssues(JSON.parse(storedIssues));
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newIssue: Issue = { id: Date.now(), title, description };
    const updatedIssues = [...issues, newIssue];
    setIssues(updatedIssues);
    localStorage.setItem('issues', JSON.stringify(updatedIssues));
    setTitle('');
    setDescription('');
  };

  return (
    <div >
    <Card  title="Issue Tracker" onClick={() => {}}>
    
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      </Card>  
      </div>
    
  );
};

export default IssueTracker;
