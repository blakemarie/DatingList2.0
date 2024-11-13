// pages/Home.tsx
// src/pages/ProfilePage.tsx
import React from 'react';
import UserCard from '../components/UserCard'; // Import UserCard component

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <UserCard
        name="Blake"
        age={35}
        career="Software Developer"
        location="Los Angeles"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4Kft8VrSM-OXyPVKtEtlmcIDCAb_qggVAQ&s"
      />
    </div>
  );
};

export default ProfilePage;
