import { useState } from 'react';

const useUserForm = () => {
  const [username, setUsername] = useState<string>('');

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return { username, handleUserNameChange };
};

export default useUserForm;
