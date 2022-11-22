import { useState } from "react";
import { filterEpisodes } from "../utils/filterEpisodes";
import { EpisodesListView } from "./EpisodesListView";
import { SearchInput } from "./SearchInput";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number | null };
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface MainContentProps {
  episodesData: IEpisode[];
}

export const MainContent = ({
  episodesData,
}: MainContentProps): JSX.Element => {
  const [currentSearchText, setCurrentSearchText] = useState<string>("");

  const handleChangeToSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchText(e.target.value);
  };

  return (
    <div className="mainContentContainer">
      <div>
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
