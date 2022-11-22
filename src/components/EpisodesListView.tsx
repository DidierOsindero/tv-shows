import { Episode } from "./Episode";
import { IEpisode } from "./MainContent";
import { filterEpisodes } from "../utils/filterEpisodes";

interface EpisodesListViewProps {
  episodes: IEpisode[];
  currentSearchText: string;
}

export const EpisodesListView = ({
  episodes, currentSearchText
}: EpisodesListViewProps): JSX.Element => {

  

  return (
    <div className="headerContainer">
      {filterEpisodes(currentSearchText,episodes).map((el) => (
        <Episode key={el.id} episode={el} />
      ))}
    </div>
  );
};
