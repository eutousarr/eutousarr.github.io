import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

const fakeUser = {
  username: "Audrey Hepburn",
  isAuthenticated: true,
  profileImageUrl:
    "https://avatars.githubusercontent.com/u/91768858?s=400&u=696bf2721c863065c28eaac8cf6a0c882b8f6881&v=4",
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
