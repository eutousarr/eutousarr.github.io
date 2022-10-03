import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

const fakeUser = {
  username: 'Ibrahima Sarr',
  isAuthenticated: true,
  profileImageUrl: '../images/default-profile-image.png',
};

function App() {
  const [currentUser, setCurrentUser] = useState(fakeUser);
  return (
    <div className="onboarding">
      <Navbar
        logout={() => setCurrentUser({ isAuthenticate: false })}
        login={() => setCurrentUser(fakeUser)}
        currentUser={currentUser}
      />
      <Homepage currentUser={currentUser} />
    </div>
  );
}

export default App;
