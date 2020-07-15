import React, { useState, useCallback } from 'react';
import { UserForm } from './UserForm';
import { UsersGrid } from './UsersGrid/UsersGrid';
import { User } from './types/User';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = useCallback(
    (user: User) => {
      setUsers(users.concat(user));
    },
    [users]
  );

  return (
    <div style={{ display: 'flex', padding: '1em' }}>
      <UserForm addUser={addUser} />
      <UsersGrid users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
