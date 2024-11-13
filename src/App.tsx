import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar'; // Import your MenuBar component
import ProfilePage from './pages/ProfilePage';
import NotesBox from './components/NotesBox'; // Use NotesBox instead of NotesPage
import HomePage from './pages/HomePage'; 
import DaterList from './components/DaterList';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* Include the MenuBar here */}
        <MenuBar />
        <Routes>
          <Route path="/daters" element={<DaterList />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notes" element={<NotesBox />} /> {/* Updated to use NotesBox */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;






