import React, { useEffect, useCallback, useState } from 'react';
import { User } from '../types/User';
import { GridLayout } from './style';
import { getUsers } from './api/getUsers';
import { UserCard } from './UserCard';

export type UsersGridProps = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const UsersGrid = ({ users, setUsers }: UsersGridProps) => {
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    if (loading) {
      const response = await getUsers();
      const users = response.data;
      setUsers(users);
      setLoading(false);
    }
  }, [setUsers, loading]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <GridLayout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((user, index) => <UserCard key={index} user={user} />)
      )}
    </GridLayout>
  );
};
