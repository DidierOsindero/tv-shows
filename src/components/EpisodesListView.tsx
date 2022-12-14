import { Episode } from "./Episode";
import { IEpisode } from "../interfaces";
import { filterEpisodes } from "../utils/filtersFunctions";

interface EpisodesListViewProps {
  episodes: IEpisode[];
  currentSearchText: string;
}

export const EpisodesListView = ({
  episodes,
  currentSearchText,
}: EpisodesListViewProps): JSX.Element => {
  return (
    <div className="episodesListContainer">
      {filterEpisodes(currentSearchText, episodes).map((el) => (
        <Episode key={el.id} episode={el} />
      ))}
    </div>
  );
};
