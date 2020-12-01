import React from 'react';
import Posts from './Posts';
import Spinner from './LoadingSpinner';

const RowUsers = ({ loading, users }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {users.map((user) => (
        <Posts key={user.id} user_number={user} />
      ))}
    </div>
  );
};
export default RowUsers;
