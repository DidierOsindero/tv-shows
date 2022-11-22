import {IShow} from "../interfaces";

interface ShowSelectorProps {
    showData: IShow[];
}

export const ShowSelector = ({showData}: ShowSelectorProps): JSX.Element => {
    return (
      <div className="showSelectorContainer">
        <select className="showSelector">
        {showData.map(show => {
            return(
                <option value={show.id} key={show.id}>{show.name}</option>
            )
        })}

        </select>
      </div>
    );
  };