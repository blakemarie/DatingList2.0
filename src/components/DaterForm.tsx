import React, { useState, useEffect } from 'react';
import './DaterForm.css';

interface Dater {
  name: string;
  age: string;
  career: string;
  location: string;
  id?: number;
}

interface DaterFormProps {
  onSubmit: (dater: Dater) => void; // Type for onSubmit function
  currentDater?: Dater | null; // Optional currentDater object
  isEditing: boolean; // Boolean for edit mode
}

const DaterForm: React.FC<DaterFormProps> = ({ onSubmit, currentDater, isEditing }) => {
  const [formData, setFormData] = useState<Dater>({
    name: '',
    age: "",
    career: '',
    location: ''
  });

  useEffect(() => {
    if (isEditing && currentDater) {
      setFormData(currentDater); // Set form data if editing
    } else {
      setFormData({ name: '', age: "", career: '', location: ''}); // Reset if not editing
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
    setFormData({ name: '', age: "", career: '', location: ''}); // Reset form after submit
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
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="career"
        value={formData.career}
        onChange={handleChange}
        placeholder="career"
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="location"
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'} Dater</button>
    </form>
    </div>
  );
};

export default DaterForm;


