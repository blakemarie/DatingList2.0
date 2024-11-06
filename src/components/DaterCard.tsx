// DaterCard.tsx
import React from 'react';
import './DaterCard.css'; // 

interface DaterCardProps {
  name: string;
  age: number;
  career: string;
  location: string;
  isDating: boolean;
  onToggleIsDating: () => void;
  onDelete: () => void;
  onEdit: () => void; 
}

const DaterCard: React.FC<DaterCardProps> = ({ name, age, career, location, onDelete, isDating, onToggleIsDating, onEdit }) => {
  return (
    <div className="dater-card">
      <button className="delete-button" onClick={onDelete}>x</button>
      <h2 className='dater-name'>{name}</h2>
      <p>Age: {age}</p>
      <p>Career: {career}</p>
      <p>Location: {location}</p>
      <button onClick={onToggleIsDating} className="toggle-dating">
        {isDating ? "❤️" : "💔"}
      </button>
      <button className="edit-button" onClick={onEdit}>✏️</button>
    </div>
  );
};

export default DaterCard;
