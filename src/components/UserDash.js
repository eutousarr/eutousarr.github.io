import React, { useEffect, useState } from "react";
import axios from "axios";

import UserAside from "./UserAside";
import FamilyList from "./FamilyList";

const UserDash = ({ currentUser }) => {
  const [family, setFamily] = useState([]);

  useEffect(() => {
    const getFamily = async () => {
      const { data } = await axios.get(
        "https://therecount.github.io/interview-materials/project-b/people.json"
      );
      setFamily(data);
    };
    getFamily();
  }, []);

  console.log(family);

  return (
    <div className="row">
      <UserAside
        profileImageUrl={currentUser.profileImageUrl}
        username={currentUser.username}
      />
      <FamilyList list={family} />
    </div>
  );
};

export default UserDash;
