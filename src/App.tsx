// App.tsx
import React from 'react';
import MenuBar from './components/MenuBar';
import DaterList from './components/DaterList'; // Correct the relative path if it's in a 'components' folder


const App: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <DaterList />
    </div>
  );
};

export default App;

