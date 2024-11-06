import React, { useState } from 'react';
import DaterCard from './DaterCard';
import DaterForm from './DaterForm';
import AddDaterButton from './AddDaterButton'; // Import AddDaterButton for adding new daters
import './DaterList.css';

interface Dater {
  id: number;
  name: string;
  age: number;
  career: string;
  location: string;
  isDating: boolean;
}

const DaterList: React.FC = () => {
  // Initialize test data in state
  const [daters, setDaters] = useState<Dater[]>([
    { id: 1, name: "Chris", age: 28, career: "Doctor", location: "Los Angeles, CA", isDating: true},
    { id: 2, name: "Zack", age: 37, career: "Sales", location: "Los Angeles, CA", isDating: true },
    { id: 3, name: "Ryan", age: 40, career: "Lawyer", location: "Washington DC", isDating: true },
    { id: 4, name: "Gary", age: 33, career: "EMT", location: "Las Vegas, NV", isDating: true },
    { id: 5, name: "Joshua", age: 30, career: "CEO", location: "Los Angeles, CA", isDating: true },
  ]);

  const [showForm, setShowForm] = useState(false);  // Track form visibility
  const [isEditing, setIsEditing] = useState(false);
  const [currentDater, setCurrentDater] = useState<Dater | null>(null);

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
    setShowForm(false); // Hide form after submission
    setCurrentDater(null);
  };

  const handleAddDater = () => {
    setShowForm(true);     // Show form for new entry
    setIsEditing(false);   // Ensure it’s not in editing mode
    setCurrentDater(null); // Clear any current editing data
  };

  const handleEditDater = (dater: Dater) => {
    setCurrentDater(dater);
    setIsEditing(true);
    setShowForm(true);
  };

  return (
    <div className='dater-list'>
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