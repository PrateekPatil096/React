import React from 'react';
import RightCard from './RightCard';

const RightContent = ({ users }) => {
  return (
    <div className="flex gap-5">
      {users.map((user, index) => (
        <RightCard
          key={index}
          id={user.id}
          img={user.img}
          tag={user.tag}
        />
      ))}
    </div>
  );
};

export default RightContent;