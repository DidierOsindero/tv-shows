import { useState } from "react";
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
  rating: { average: number };
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
      <SearchInput
        currentSearchText={currentSearchText}
        changeToSearchText={handleChangeToSearchText}
      />
      <EpisodesListView episodes={episodesData} currentSearchText={currentSearchText}/>
    </div>
  );
};
