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

export const MainContent = (): JSX.Element => {
  return (
    <div className="mainContentContainer">
      <p>Main Content</p>
    </div>
  );
};
