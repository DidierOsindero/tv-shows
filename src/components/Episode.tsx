import { IEpisode } from "./MainContent";

export const Episode = (props: IEpisode): JSX.Element => {
  return (
    <div className="episodeContainer">
      <h4>
        {props.name} -{" "}
        <i>
          {props.season}: {props.number}
        </i>
      </h4>
      <div className="episodeImageContainer">
        <img src={props.image.medium} />
      </div>
      <div className="episodeSummaryContainer">
        <p>{props.summary}</p>
      </div>
    </div>
  );
};
