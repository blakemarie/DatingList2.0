// AddDaterButton.tsx
import React from 'react';
import './AddDaterButton.css'; // Ensure this CSS file is created

interface AddDaterButtonProps {
  onAddDater: () => void;
}

const AddDaterButton: React.FC<AddDaterButtonProps> = ({ onAddDater }) => {
    
  return (
    <button className="add-dater-button" onClick={onAddDater}>
      + {}
    </button>
  );
};

export default AddDaterButton;
