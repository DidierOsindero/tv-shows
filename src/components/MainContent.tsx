import { useEffect, useState } from "react";
import { filterEpisodes, filterShows } from "../utils/filtersFunctions";
import { EpisodesListView } from "./EpisodesListView";
import { SearchInput } from "./SearchInput";
import { IEpisode } from "../interfaces";
import { IShow } from "../interfaces";
import { ShowSelector } from "./ShowSelector";
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
  showData,
  handleShowClick,
  handleShowSelectorClick,
}: MainContentProps): JSX.Element => {
  const [currentSearchText, setCurrentSearchText] = useState<string>("");
  const [isShowPressed, setisShowPressed] = useState(false);

  const handleShowIsPressed = () => {
    setisShowPressed(!isShowPressed);
    window.scrollTo({ top: 0 });
  };

  const handleChangeToSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchText(e.target.value);
  };

  useEffect (() => {
    setCurrentSearchText("");
  }, [isShowPressed])

  return (
    <div className="mainContentContainer">
      <div className="searchContainer">
      {isShowPressed && <button className="backToShowsBtn"onClick={handleShowIsPressed}>Back to shows</button>}
        <ShowSelector data={showData} onClick={handleShowSelectorClick} />
        <SearchInput
          currentSearchText={currentSearchText}
          changeToSearchText={handleChangeToSearchText}
        />
        
          {isShowPressed ? <p>Showing {filterEpisodes(currentSearchText, episodesData).length}{" "}
          results out of {episodesData.length}</p> : <p>Showing {filterShows(currentSearchText, showData).length}{" "}
          results out of {showData.length}</p>}
        
      </div>
      {isShowPressed ? (
        <>
          <EpisodesListView
            episodes={episodesData}
            currentSearchText={currentSearchText}
          />
        </>
      ) : (
        <ShowListView
          shows={showData}
          currentSearchText={currentSearchText}
          handleShowClick={handleShowClick}
          handleShowIsPressed={handleShowIsPressed}
        />
      )}
    </div>
  );
};
