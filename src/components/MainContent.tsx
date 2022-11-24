import { useState } from "react";
import { filterEpisodes } from "../utils/filterEpisodes";
import { EpisodesListView } from "./EpisodesListView";
import { SearchInput } from "./SearchInput";
import { IEpisode } from "../interfaces";
import { IShow } from "../interfaces";
import { ShowSelector } from "./ShowSelector";
import { EpisodeSelector } from "./EpisodeSelector";
import { ShowListView } from "./ShowListView";

type changeEpisodeDataFunc = (e: React.ChangeEvent<HTMLSelectElement>) => void;

export interface MainContentProps {
  episodesData: IEpisode[];
  showData: IShow[];
  handleShowClick: (showId: string) => void;
  handleShowSelectorClick: changeEpisodeDataFunc;
}

export const MainContent = ({
  episodesData,
  showData,handleShowClick,
  handleShowSelectorClick,
}: MainContentProps): JSX.Element => {
  const [currentSearchText, setCurrentSearchText] = useState<string>("");

  const handleChangeToSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchText(e.target.value);
  };

  return (
    <div className="mainContentContainer">
      <div className="searchContainer">
        <ShowSelector data={showData} onClick={handleShowSelectorClick} />
        <EpisodeSelector episodes={episodesData} />
        <SearchInput
          currentSearchText={currentSearchText}
          changeToSearchText={handleChangeToSearchText}
        />
        <p>
          Showing {filterEpisodes(currentSearchText, episodesData).length}{" "}
          results out of {episodesData.length}
        </p>
      </div>
      <ShowListView shows={showData} currentSearchText={currentSearchText} handleShowClick={handleShowClick}/>
      <EpisodesListView
        episodes={episodesData}
        currentSearchText={currentSearchText}
      />
    </div>
  );
};
