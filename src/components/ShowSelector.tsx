import { IShow } from "../interfaces";

type changeEpisodeDataFunc = (e: React.ChangeEvent<HTMLSelectElement>) => void;

interface ShowSelectorProps {
  data: IShow[];
  onClick: changeEpisodeDataFunc;
  handleChangeShowID: (showID: number | undefined) => void;
}

export const ShowSelector = ({
  data,
  onClick,
  handleChangeShowID,
}: ShowSelectorProps): JSX.Element => {
  const sortedData = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="showSelectorContainer">
      <select
        className="showSelector"
        onChange={(e) => {
          onClick(e);
          e.target.value == undefined
            ? handleChangeShowID(undefined)
            : handleChangeShowID(Number(e.target.value));
        }}
      >
        <option value='' className="allShows"> All Shows</option>
        {sortedData.map((show) => {
          return (
            <option value={show.id} key={show.id}>
              {show.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
