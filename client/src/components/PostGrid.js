import React from 'react';
import Posts from './Posts';
import Spinner from './LoadingSpinner';

const GridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

const GridUsersDisplay = ({ loading, users }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={GridStyle}>
      {users.map((user) => (
        <Posts key={user.id} user_number={user} />
      ))}
    </div>
  );
};

export default GridUsersDisplay;
