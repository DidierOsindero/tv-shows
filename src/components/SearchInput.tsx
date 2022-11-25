interface SearchInputProps {
  currentSearchText: string;
  changeToSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({
  currentSearchText,
  changeToSearchText,
}: SearchInputProps): JSX.Element => {
  return (
    <input
      placeholder="Search..."
      value={currentSearchText}
      onChange={(e) => changeToSearchText(e)}
    ></input>
  );
};
