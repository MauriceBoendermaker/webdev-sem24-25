import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { PersonCard } from './components.tsx';
import { FormFields } from './components.tsx';
import { Form } from './components.tsx';

const App: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  return (
    <>
      <PersonCard name="Thijs" role="student" grade={6.9} />
      <PersonCard name="John" role="teacher" subjects={['OODP', 'INFWAD']} />
      <PersonCard name="Alexander" role="staff" department="CMI" />

      <FormFields onChange={handleUsernameChange} />

      <Form username={username} />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
