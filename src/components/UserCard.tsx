// src/components/UserCard.tsx
import React from 'react';
import './UserCard.css'; 

// Define a TypeScript interface for the props
interface UserCardProps {
  name: string;
  age: number;
  career: string;
  location: string;
  image: string; // URL to the image
}

const UserCard: React.FC<UserCardProps> = ({ name, age, career, location, image }) => {
  return (
    <div className="user-card">
      <img src={image} alt={`${name}'s profile`} className="user-image" />
      <div className="user-info">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Career: {career}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default UserCard;
