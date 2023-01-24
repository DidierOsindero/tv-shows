import { IShow } from "../interfaces";
import { removeParagraphTags } from "../utils/removeParagraphTags";

interface ShowProps {
  show: IShow;
  handleShowClick: (e: string) => void;
  handleShowIsPressed: (showID: string) => void;
}

export const Show = ({
  show,
  handleShowClick,
  handleShowIsPressed,
}: ShowProps): JSX.Element => {
  return (
    <div
      className="showContainer"
      id={String(show.id)}
      onClick={(e) => {
        handleShowClick(e.currentTarget.id);
        handleShowIsPressed(e.currentTarget.id);
      }}
    >
      <h2 className="showTitle">{show.name}</h2>
      <div className="showContentContainer">
        <div className="showImageContainer">
          {show.image && (
            <img
              src={show.image.medium && show.image.medium}
              alt={`still from ${show.name}`}
              className="showImage"
            />
          )}
        </div>
        <div className="showSummaryContainer">
          <p>{show.summary && removeParagraphTags(show.summary)}</p>
        </div>
        <div className="showInfoListContainer">
          <div className="showInfoList">
            <p>
              <b>Rating:</b> {show.rating.average}
            </p>
            <p>
              <b>Genres:</b> {show.genres}
            </p>
            <p>
              <b>Status:</b> {show.status}
            </p>
            <p>
              <b>Runtime:</b> {show.runtime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
