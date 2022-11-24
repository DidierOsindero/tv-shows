import { IShow } from "../interfaces"
import {filterShows} from "../utils/filterEpisodes"
import { Show } from "./Show";

interface ShowListViewProps {
    shows: IShow[];
    currentSearchText: string;
    handleShowClick: (e: string) => void;
  }
  
  export const ShowListView = ({
    shows,
    currentSearchText, handleShowClick
  }: ShowListViewProps): JSX.Element => {
    return (
      <div className="showListContainer">
        {filterShows(currentSearchText,shows).map((show) => (
          <Show key={show.id} show={show} handleShowClick={handleShowClick}/>
        ))}
      </div>
    );
  };