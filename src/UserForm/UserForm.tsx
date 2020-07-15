import React, { useState, useMemo, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { User } from '../types/User';
import { createUser } from './api/createUser';
import { FormLayout } from './style';

export type UserFormProps = {
  addUser: (user: User) => void;
};

export const UserForm = ({ addUser }: UserFormProps) => {
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setError(false);
  }, [email]);

  const resetValues = useCallback(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setDescription('');
  }, []);

  const submitUser = useCallback(async () => {
    setError(false);
    try {
      const { data: newUser } = await createUser({
        firstName,
        lastName,
        email,
        password,
        description
      });
      addUser(newUser);
      resetValues();
    } catch (e) {
      setError(true);
    }
  }, [firstName, lastName, email, password, description, addUser, resetValues]);

  const helperText = useMemo(
    () => error && 'Email is either invalid or taken',
    [error]
  );

  const isSubmitValid = useMemo(
    () => firstName && lastName && email && password,
    [firstName, lastName, email, password]
  );
  return (
    <FormLayout>
      <div>
        <TextField
          data-testid='firstName'
          label='First Name'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          style={{ marginRight: '2em' }}
        />
        <TextField
          data-testid='lastName'
          label='Last Name'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <TextField
        data-testid='email'
        label='Email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        style={{ marginRight: '2em' }}
        error={error}
        helperText={helperText}
      />
      <TextField
        data-testid='password'
        label='Password'
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <TextField
          data-testid='description'
          label='Description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          multiline
          rows={2}
          rowsMax={4}
        />
      </div>
      <Button
        data-testid='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px' }}
        onClick={submitUser}
        disabled={!isSubmitValid}
      >
        Submit
      </Button>
    </FormLayout>
  );
};
