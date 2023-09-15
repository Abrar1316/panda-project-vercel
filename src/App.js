import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Images from './Images';
import ArtDescription from './ArtDescription';
import BottomNavbar from './BottomNavbar';
import WhoWeAre from './WhoWeAre'; // Correct the import statement
import './styles.css'; // Import the CSS file

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<ArtDescription />} />
      <Route path="/WhoWeAre" element={<WhoWeAre />} />
        {/* Other routes */}
      </Routes>
      {/* <Images /> */}
      
      <BottomNavbar />
      {/* Add the rest of your application content here */}
    </div>
    </Router>
  );
}

export default App;
