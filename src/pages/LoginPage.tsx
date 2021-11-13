import React, {useState} from 'react';
import {TextField, Box, Button, Alert} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import {loginWithEmail} from '../firebase-api/auth';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const onUserNameChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(value);
  };

  const onPasswordChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(value);
  };

  const onLoginClick = (): void => {
    loginWithEmail(email, password).then(() => void navigate('/about')).catch(() => setError('Authentication failed! Try again.'));
  };

  return (
    <section className="login-container">
      <Box component="form" sx={{display: 'flex', flexDirection: 'column', rowGap: '8px'}}>
        {error ? <Alert severity={'error'}>{error}</Alert> : null}
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
