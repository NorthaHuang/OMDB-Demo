import React, { useState, createContext } from 'react';
import {
  IStates,
  IProviderProps,
  ISearchData,
  ISearchResult,
  IPagination,
} from './types';

const context = createContext({} as IStates);

const Provider = ({ children }: IProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState<ISearchData>({
    title: '',
    year: '',
    type: '',
  });
  const [searchResult, setSearchResult] = useState<ISearchResult>({} as ISearchResult);
  const [pagination, setPagination] = useState<IPagination>({
    RESULT_PER_PAGE: 10,
    totalPages: -1,
    nowPage: -1,
  });

  const states = {
    isLoading,
    setIsLoading,
    searchData,
    setSearchData,
    searchResult,
    setSearchResult,
    pagination,
    setPagination,
  };

  return <context.Provider value={states}>{children}</context.Provider>;
};

export default context;
export { Provider };
