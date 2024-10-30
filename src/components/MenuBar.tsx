// MenuBar.tsx
// MenuBar.tsx
import React from 'react';
import './MenuBar.css'; // Import your CSS file

const MenuBar: React.FC = () => {
  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        <li><button>Profile</button></li>
        <li><button>Notes</button></li>
        <li><button>Daters</button></li>
      </ul>
    </nav>
  );
};

export default MenuBar;

