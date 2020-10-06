export interface IStates {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export interface IProviderProps {
  children: JSX.Element;
}
