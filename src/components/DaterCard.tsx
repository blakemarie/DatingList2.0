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
}

const DaterCard: React.FC<DaterCardProps> = ({ name, age, career, location, onDelete, isDating, onToggleIsDating }) => {
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
    </div>
  );
};

export default DaterCard;
