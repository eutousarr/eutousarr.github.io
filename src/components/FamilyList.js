import React from 'react';
import Relation from './Relation';

const FamilyList = ({ list }) => {
  var familyList = 'Start adding members';
  if (list) {
    familyList = list.map((r) => (
      <div key={r.id}>
        <Relation
          key={r._id}
          born={r.born}
          hometown={r.hometown}
          id={r.id}
          name={r.name}
          profileImageUrl={null}
          p1={r.parentId1}
          p2={r.parentId2}
        />
      </div>
    ));
  }

  return (
    <div className="row col-sm-8">
      <div className="offset-1 col-sm-10">
        <ul className="list-group" id="reletive">
          {familyList}
        </ul>
      </div>
    </div>
  );
};

export default FamilyList;
