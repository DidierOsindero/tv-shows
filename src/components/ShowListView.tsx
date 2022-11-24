import { IShow } from "../interfaces"
import {filterShows} from "../utils/filterEpisodes"
import { Show } from "./Show";

interface ShowListViewProps {
    shows: IShow[];
    currentSearchText: string;
  }
  
  export const ShowListView = ({
    shows,
    currentSearchText,
  }: ShowListViewProps): JSX.Element => {
    return (
      <div className="showListContainer">
        {filterShows(currentSearchText,shows).map((show) => (
          <Show key={show.id} show={show} />
        ))}
      </div>
    );
  };