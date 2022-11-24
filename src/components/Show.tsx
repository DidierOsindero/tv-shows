import {IShow} from "../interfaces";
import { removeParagraphTags } from "../utils/removeParagraphTags";

interface ShowProps {
    show: IShow;
    handleShowClick: (e: string) => void;
  }
  
  export const Show = ({ show, handleShowClick }: ShowProps): JSX.Element => {

    return (
      <div className="showContainer" id={String(show.id)} onClick={(e) => handleShowClick(e.currentTarget.id)}>
        <h4>
          {show.name} -{" "}
        </h4>
        <ul className="showDetailsList">
            <p>Rating: {show.rating.average}</p>
            <p>Genres: {show.genres}</p>
            <p>Status: {show.status}</p>
            <p>Runtime: {show.runtime}</p>
        </ul>
        <div className="episodeImageContainer">
          {show.image && (
            <img
              src={show.image.medium && show.image.medium}
              alt={`still from ${show.name}`}
            />
          )}
        </div>
        <div className="episodeSummaryContainer">
          <p>{show.summary && removeParagraphTags(show.summary)}</p>
        </div>
      </div>
    );
  };