import React, { useState, useEffect } from 'react';
import './DaterForm.css';
import { Dater } from './types';

interface DaterFormProps {
  onSubmit: (dater: Dater) => void; // Type for onSubmit function
  currentDater?: Dater | null; // Optional currentDater object
  isEditing: boolean; // Boolean for edit mode
}

const DaterForm: React.FC<DaterFormProps> = ({ onSubmit, currentDater, isEditing }) => {
  const [formData, setFormData] = useState<Dater>({
    id: Date.now(), // Assuming each dater has a unique ID
    name: '',
    age: 0,
    career: '',
    location: '',
    isDating: true // Initial state, assuming `isDating` is a required boolean property
  });

  useEffect(() => {
    if (isEditing && currentDater) {
      setFormData(currentDater); // Set form data if editing
    } else {
      setFormData({
        id: Date.now(),
        name: '',
        age: 0,
        career: '',
        location: '',
        isDating: true
      }); // Reset if not editing
    }
  }, [isEditing, currentDater]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'age' ? Number(value) : value // Convert age to number
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      id: Date.now(),
      name: '',
      age: 0,
      career: '',
      location: '',
      isDating: true
    }); // Reset form after submit
  };

  return (
    <div className="dater-form-container">
      <h2 className="dater-form-title">{isEditing ? 'Update Dater' : 'Add Dater'}</h2>
      <form onSubmit={handleSubmit} className="dater-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formData.age || ''} // Ensure empty string for initial state
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="career"
          value={formData.career}
          onChange={handleChange}
          placeholder="Career"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Dater</button>
      </form>
    </div>
  );
};

export default DaterForm;



