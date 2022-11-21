import { EpisodesListView } from "./EpisodesListView";

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
  return (
    <div className="mainContentContainer">
      <EpisodesListView episodes={episodesData} />
    </div>
  );
};
