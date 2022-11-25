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
  const [showID, setShowID] = useState<number | undefined>(undefined);

  const handleShowIsPressed = () => {
    setisShowPressed(!isShowPressed);
    window.scrollTo({ top: 0 });
  };

  const handleChangeShowID = (showID: number | undefined) => {
    setShowID(showID);
  };

  const handleChangeToSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchText(e.target.value);
  };

  useEffect(() => {
    setCurrentSearchText("");
  }, [isShowPressed]);

  return (
    <div className="mainContentContainer">
      <div className="searchContainer">
        {isShowPressed && (
          <button className="backToShowsBtn" onClick={handleShowIsPressed}>
            Back to shows
          </button>
        )}
        <ShowSelector
          data={showData}
          onClick={handleShowSelectorClick}
          handleChangeShowID={handleChangeShowID}
        />
        <SearchInput
          currentSearchText={currentSearchText}
          changeToSearchText={handleChangeToSearchText}
        />

        {isShowPressed ? (
          <p>
            Showing {filterEpisodes(currentSearchText, episodesData).length} out
            of {episodesData.length} results
          </p>
        ) : (
          <p>
            Showing {filterShows(currentSearchText, showData, showID).length}{" "}
            out of {showData.length} results
          </p>
        )}
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
          showID={showID}
        />
      )}
    </div>
  );
};
