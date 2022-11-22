import { IShow } from "../interfaces";
import { episodeCodeFormatter } from "../utils/episodeCodeFormatter";

interface ShowSelectorProps {
  data: IShow[];
}

export const ShowSelector = ({ data }: ShowSelectorProps): JSX.Element => {
  return (
    <div className="showSelectorContainer">
      <select className="showSelector">
        {data.map((show) => {
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
