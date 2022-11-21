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
  const [inputText, setInputText] = useState<string>("");

  const handleChangeToInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="mainContentContainer">
      <SearchInput
        currentSearchText={inputText}
        changeToInputText={handleChangeToInputText}
      />
      <EpisodesListView episodes={episodesData} />
    </div>
  );
};
