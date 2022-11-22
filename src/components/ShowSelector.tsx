import { IShow } from "../interfaces";

type changeEpisodeDataFunc = (e: React.ChangeEvent<HTMLSelectElement>) => void;

interface ShowSelectorProps {
  data: IShow[];
  onClick: changeEpisodeDataFunc;
}

export const ShowSelector = ({
  data,
  onClick,
}: ShowSelectorProps): JSX.Element => {
  const sortedData = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="showSelectorContainer">
      <select className="showSelector" onChange={(e) => onClick(e)}>
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
