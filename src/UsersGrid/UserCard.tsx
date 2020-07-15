import React from 'react';
import { User } from '../types/User';
import { UserCardLayout } from './style';
import UserIcon from './userIcon.png';

export type UserCardProps = { user: User };

export const UserCard = ({ user }: UserCardProps) => (
  <UserCardLayout>
    <img src={UserIcon} />
    <div>{user.email}</div>
    <div style={{ color: 'grey', fontWeight: 'bold' }}>
      {user.firstName} {user.lastName}
    </div>
    {user.description && (
      <div style={{ color: 'grey' }}>{user.description}</div>
    )}
  </UserCardLayout>
);
