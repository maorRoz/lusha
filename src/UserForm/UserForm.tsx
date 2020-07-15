import React, { useState, useMemo, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createUser } from './api/createUser';
import { FormLayout } from './style';

export const UserForm = () => {
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
      await createUser({ firstName, lastName, email, password, description });
      resetValues();
    } catch (e) {
      setError(true);
    }
  }, [firstName, lastName, email, password, description, resetValues]);

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
          label='First Name'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          style={{ marginRight: '2em' }}
        />
        <TextField
          label='Last Name'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <TextField
        label='Email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        style={{ marginRight: '2em' }}
        error={error}
        helperText={helperText}
      />
      <TextField
        label='Password'
        /*         type="password" */
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <TextField
          label='Description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <Button
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
