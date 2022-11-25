import { IShow } from "../interfaces";
import { filterShows } from "../utils/filtersFunctions";
import { Show } from "./Show";

interface ShowListViewProps {
  shows: IShow[];
  currentSearchText: string;
  showID: number | undefined;
  handleShowClick: (e: string) => void;
  handleShowIsPressed: () => void;
}

export const ShowListView = ({
  shows,
  currentSearchText,
  showID,
  handleShowClick,
  handleShowIsPressed,
}: ShowListViewProps): JSX.Element => {
  return (
    <div className="showListContainer">
      {filterShows(currentSearchText, shows, showID).map((show) => (
        <Show
          key={show.id}
          show={show}
          handleShowClick={handleShowClick}
          handleShowIsPressed={handleShowIsPressed}
        />
      ))}
    </div>
  );
};
