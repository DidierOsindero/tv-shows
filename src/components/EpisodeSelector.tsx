import { IEpisode } from "../interfaces";
import { episodeCodeFormatter } from "../utils/episodeCodeFormatter";

interface ShowSelectorProps {
  episodes: IEpisode[];
}

export const EpisodeSelector = ({
  episodes,
}: ShowSelectorProps): JSX.Element => {
  return (
    <div className="showSelectorContainer">
      <select className="showSelector">
        {episodes.map((episode) => {
          return (
            <option value={episode.id} key={episode.id}>
              {episodeCodeFormatter(episode.season, episode.number)}-
              {episode.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
