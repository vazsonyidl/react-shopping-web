import React, {useState} from 'react';
import {TextField, Box, Button} from '@mui/material';

import {loginWithEmail} from '../firebase-api/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onUserNameChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(value);
  };

  const onPasswordChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(value);
  };

  const onLoginClick = (): void => {
    loginWithEmail(email, password);
  };

  return (
    <section>
      <Box component="form" sx={{display: 'flex', flexDirection: 'column'}}>
        <TextField label="E-mail" variant="outlined" size="small" autoComplete="username" value={email}
                   onChange={onUserNameChange}/>
        <TextField label="Password" type="password" variant="outlined" autoComplete="current-password" size="small"
                   value={password} onChange={onPasswordChange}/>
        <Button variant="outlined" type="button" onClick={onLoginClick}>Login</Button>
      </Box>
    </section>
  );
};

export default LoginPage;
