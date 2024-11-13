import React, { useState } from 'react';
import './NotesBox.css'; // Import the new CSS file for NotesBox

const NotesBox: React.FC = () => {
  const [note, setNote] = useState<string>(''); // Store the note text in state

  // Handle the text change in the textarea
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  return (
    <div className="notes-container">
      <h2>💭 Notes</h2>
      <textarea
        className="notes-textarea"
        value={note}
        onChange={handleChange}
        placeholder="Type your notes here..."
      />
    </div>
  );
};

export default NotesBox;

