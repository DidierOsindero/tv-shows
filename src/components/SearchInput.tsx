interface SearchInputProps {
  currentSearchText: string;
  changeToInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({
  currentSearchText,
  changeToInputText,
}: SearchInputProps): JSX.Element => {
  return (
    <input
      placeholder="Enter episode name"
      value={currentSearchText}
      onChange={(e) => changeToInputText(e)}
    ></input>
  );
};
