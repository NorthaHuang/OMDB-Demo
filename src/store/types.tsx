export interface ISearchResultList {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export interface ISearchResult {
  Response: string;
  Search: ISearchResultList[];
  totalResults: string;
}

export interface ISearchData {
  title: string;
  year?: string;
  type?: string;
  page?: string;
}

export interface IPagination {
  RESULT_PER_PAGE: number;
  totalPages: number;
  nowPage: number;
}

export interface ISearchParams {
  s: string;
  y?: string;
  type?: string;
  page?: string;
}

export interface IStates {
  searchData: ISearchData;
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
  searchResult: ISearchResult;
  setSearchResult: React.Dispatch<React.SetStateAction<ISearchResult>>;
  pagination: IPagination;
  setPagination: React.Dispatch<React.SetStateAction<IPagination>>;
}

export interface IProviderProps {
  children: JSX.Element;
}
