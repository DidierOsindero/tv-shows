import { useState } from "react";
import { filterEpisodes } from "../utils/filterEpisodes";
import { EpisodesListView } from "./EpisodesListView";
import { SearchInput } from "./SearchInput";
import { IEpisode } from "../interfaces";
import { IShow } from "../interfaces";
import { ShowSelector } from "./ShowSelector";
import { EpisodeSelector } from "./EpisodeSelector";


export interface MainContentProps {
  episodesData: IEpisode[];
  showData: IShow[];
}

export const MainContent = ({
  episodesData, showData
}: MainContentProps): JSX.Element => {
  const [currentSearchText, setCurrentSearchText] = useState<string>("");

  const handleChangeToSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchText(e.target.value);
  };

  return (
    <div className="mainContentContainer">
      <div className="searchContainer">
        <ShowSelector data={showData} />
        <EpisodeSelector episodes={episodesData}/>
        <SearchInput
          currentSearchText={currentSearchText}
          changeToSearchText={handleChangeToSearchText}
        />
        <p>
          Showing {filterEpisodes(currentSearchText, episodesData).length}{" "}
          results out of {episodesData.length}
        </p>
      </div>
      <EpisodesListView
        episodes={episodesData}
        currentSearchText={currentSearchText}
      />
    </div>
  );
};
