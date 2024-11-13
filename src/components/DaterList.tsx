import React, { useEffect, useState } from 'react';
import { Dater } from './types';
import DaterCard from './DaterCard';
import DaterForm from './DaterForm';
import AddDaterButton from './AddDaterButton';
import './DaterList.css';

const DaterList: React.FC = () => {
  const [daters, setDaters] = useState<Dater[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentDater, setCurrentDater] = useState<Dater | null>(null);

  useEffect(() => {
    // Fetch data from JSON Server
    fetch('http://localhost:3000/daters')
      .then((response) => response.json())
      .then((data) => setDaters(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteDater = (id: number) => {
    setDaters(daters.filter(dater => dater.id !== id));
  };

  const handleToggleDating = (id: number) => {
    setDaters(daters.map(dater => 
      dater.id === id ? { ...dater, isDating: !dater.isDating } : dater
    ));
  };

  const handleFormSubmit = (dater: Dater) => {
    if (isEditing && currentDater) {
      setDaters(daters.map(d => d.id === dater.id ? dater : d));
      setIsEditing(false);
    } else {
      setDaters([...daters, { ...dater, id: Date.now() }]);
    }
    setShowForm(false);
    setCurrentDater(null);
  };

  const handleAddDater = () => {
    setShowForm(true);
    setIsEditing(false);
    setCurrentDater(null);
  };

  const handleEditDater = (dater: Dater) => {
    setCurrentDater(dater);
    setIsEditing(true);
    setShowForm(true);
  };

  return (
    <div className="dater-list">
      <h2>💖 Dater List 💖</h2>
      {showForm && (
        <DaterForm 
          onSubmit={handleFormSubmit} 
          currentDater={isEditing ? currentDater : null} 
          isEditing={isEditing}
        />
      )}
      {daters.map((dater) => (
        <DaterCard 
          key={dater.id} 
          name={dater.name} 
          age={dater.age} 
          career={dater.career} 
          location={dater.location} 
          isDating={dater.isDating}
          onToggleIsDating={() => handleToggleDating(dater.id)} 
          onDelete={() => handleDeleteDater(dater.id)}
          onEdit={() => handleEditDater(dater)}
        />
      ))}
      <AddDaterButton onAddDater={handleAddDater} />
    </div>
  );
};

export default DaterList;
