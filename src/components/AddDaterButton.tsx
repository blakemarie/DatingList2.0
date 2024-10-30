// AddDaterButton.tsx
import React from 'react';
import './AddDaterButton.css'; // Ensure this CSS file is created

interface AddDaterButtonProps {
  onAddDater: () => void;
}

const AddDaterButton: React.FC<AddDaterButtonProps> = ({ onAddDater }) => {
    console.log("AddDaterButton is rendering")
  return (
    <button className="add-dater-button" onClick={onAddDater}>
      + {/* Display a large plus sign */}
    </button>
  );
};

export default AddDaterButton;
