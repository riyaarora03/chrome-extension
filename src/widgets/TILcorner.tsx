import React, { useState, useEffect } from 'react';
import '../css/til.css';
import Card from '../components/card';


interface TILEntry {
  title: string;
  domain: string;
  summary: string;
}

const TILCorner: React.FC = () => {
  const [tilEntries, setTILEntries] = useState<TILEntry[]>([]);
  const [title, setTitle] = useState('');
  const [domain, setDomain] = useState('');
  const [summary, setSummary] = useState('');

  // Load entries from local storage when component mounts
  useEffect(() => {
    const storedEntries = localStorage.getItem('tilEntries');
    if (storedEntries) {
      setTILEntries(JSON.parse(storedEntries));
    }
  }, []);

  // Save entries to local storage whenever tilEntries changes
  useEffect(() => {
    localStorage.setItem('tilEntries', JSON.stringify(tilEntries));
  }, [tilEntries]);

  const handleAddEntry = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim() && domain.trim() && summary.trim()) {
      const newEntry: TILEntry = { title, domain, summary };
      setTILEntries([...tilEntries, newEntry]);
      setTitle('');
      setDomain('');
      setSummary('');
    }
  };

  return (
    <div >
      <Card title="Today I Learnt" onClick={() => {}}>
      <form onSubmit={handleAddEntry} className="form-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Domain"
          required
        />
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary"
          required
        />
        <button type="submit">Add Entry</button>
      </form>
      <div className="til-list">
        {tilEntries.map((entry, index) => (
          <div key={index} className="til-item">
            <h3>{entry.title}</h3>
            <p><strong>Domain:</strong> {entry.domain}</p>
            <p><strong>Summary:</strong> {entry.summary}</p>
          </div>
        ))}
      </div>
      </Card>
    </div>
  );
};

export default TILCorner;