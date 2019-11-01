import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

const LoginFormContainer = styled.form`
  width: 360px;
  height: 580px;
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem;
  border-radius: 10px;
  background: #fff;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Field = styled.div`
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 2rem 0;

  input {
    color: #333;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 0.3125rem;
    height: 2.5rem;

    &:invalid:focus {
      & + span::before {
        font-size: 0.5rem;
        color: black;
        top: 0px;
      }
    }

    &:valid {
      & + span::before {
        font-size: 0.5rem;
        color: black;
        top: 0px;
      }
    }
  }

  span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 0.3125rem;
    color: #adadad;
    transform: translateY(-50%);
    transition: 0.35s;
  }
`;

const LoginBtn = styled.input`
  display: block;
  font-size: 1rem;
  height: 3.125rem;
  border: none;
  margin: 1rem;

  &:hover {
    background-image: linear-gradient(120deg, #3498db, #8e44ad);
    cursor: pointer;
    color: white;
  }
`;

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    // tslint:disable-next-line: no-console
    console.log(name + password);
    event.preventDefault();
  };

  return (
    <LoginFormContainer onSubmit={handleFormSubmit}>
      <h1> Dealer Portal</h1>
      <Field>
        <input type='text' onChange={onNameChange} required />
        <span data-placeholder='Username' />
      </Field>
      <Field>
        <input type='password' onChange={onPasswordChange} required />
        <span data-placeholder='Password' />
      </Field>

      <LoginBtn type='submit' value='Login' />
      <div>
        New to the app? <a href='#'> sign up now</a>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;
