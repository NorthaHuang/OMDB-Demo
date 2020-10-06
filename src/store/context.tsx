import React, { useState, createContext } from 'react';
import { IStates, IProviderProps } from './types';

const context = createContext({} as IStates);

const Provider = ({ children }: IProviderProps): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [type, setType] = useState<string>('');

  const states = {
    title,
    setTitle,
    year,
    setYear,
    type,
    setType,
  };

  return <context.Provider value={states}>{children}</context.Provider>;
};

export default context;
export { Provider };
