import React, { useState } from 'react';
import DaterCard from './DaterCard';
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

  const handleDeleteDater = (id: number) => {
    setDaters(daters.filter(dater => dater.id !== id));
  };

  const handleToggleDating = (id: number) => {
    setDaters(daters.map(dater => 
      dater.id === id ? { ...dater, isDating: !dater.isDating } : dater
    ));
  };

  // Function to add a new dater
  const addDater = () => {
    const newDater = {
      id: daters.length + 1, // Ensure a unique id
      name: "New Dater",
      age: 25,
      career: "Unknown",
      location: "Unknown",
      isDating: true,
    };
    setDaters([...daters, newDater]); // Update state with new dater added
  };

  return (
    <div className='dater-list'>
      <h2>💖 Dater List 💖</h2>
      {daters.map((dater) => (
        <DaterCard 
          key={dater.id} 
          name={dater.name} 
          age={dater.age} 
          career={dater.career} 
          location={dater.location} 
          onDelete={() => handleDeleteDater(dater.id)} // Pass the delete function
          isDating={dater.isDating}
          onToggleIsDating={() => handleToggleDating(dater.id)} 
        />
      ))}
      <AddDaterButton onAddDater={addDater} /> {/* Add button to add a new dater */}
    </div>
  );
};

export default DaterList;
