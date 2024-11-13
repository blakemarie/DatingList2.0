import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './MenuBar.css'; // Import your CSS file

const MenuBar: React.FC = () => {
  return (
    <nav>
      <ul className="menu-list">
        <li><Link to="/profile"><button>Profile</button></Link></li>
        <li><Link to="/notes"><button>Notes</button></Link></li>
        <li><Link to="/daters"><button>Daters</button></Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;


