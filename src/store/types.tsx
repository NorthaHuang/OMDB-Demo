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

export interface IStates {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  searchResult: ISearchResult;
  setSearchResult: React.Dispatch<React.SetStateAction<ISearchResult>>;
}

export interface IProviderProps {
  children: JSX.Element;
}
