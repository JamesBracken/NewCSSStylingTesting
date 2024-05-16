import { useState } from 'react';
import {styled} from 'styled-components'

import Button from './Button.jsx'
import Input from './Input.jsx';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
  const SecondButton = styled.button`
  & text-button {
    color: #f0b322;
    border: none;
  }
  & text-button:hover {
    color: #f0920e;
  }
  `
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
          <Input
          label='Email'
            invalid={emailNotValid}
            type="email"
            //style={{backgroundColor : emailNotValid ? '#fed2d2' : '#d1d5db'}}
            //emailNotValid ?{backgroundColor:'#fed2d2', borderColor:'#f73f3f',color:'#ef4444'}:''
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <Input
          label= 'Password'
          invalid={passwordNotValid}
            type="password"
            onChange={(event) =>
            handleInputChange('password', event.target.value)}
          />
      </ControlContainer>
      <div className="actions">
        <SecondButton type="button" className="text-button">
          Create a new account
        </SecondButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}