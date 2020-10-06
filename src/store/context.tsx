import React, { useState, createContext } from 'react';
import { IStates, IProviderProps, ISearchData, ISearchResult } from './types';

const context = createContext({} as IStates);

const Provider = ({ children }: IProviderProps): JSX.Element => {
  const [searchData, setSearchData] = useState<ISearchData>({
    title: '',
    year: '',
    type: '',
  });
  const [searchResult, setSearchResult] = useState<ISearchResult>({} as ISearchResult);

  const states = {
    searchData,
    setSearchData,
    searchResult,
    setSearchResult,
  };

  return <context.Provider value={states}>{children}</context.Provider>;
};

export default context;
export { Provider };
