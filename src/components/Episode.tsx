import { IEpisode } from "./MainContent";
import { episodeCodeFormatter } from "../utils/episodeCodeFormatter";
interface EpisodeProps {
  episode: IEpisode;
}

export const Episode = ({ episode }: EpisodeProps): JSX.Element => {
  function removeParagraphTags(summary: string) {
    summary = summary.replace(/<p>/g, "");
    return summary.replace(/[</p>]/g, "");
  }

  return (
    <div className="episodeContainer">
      <h4>
        {episode.name} -{" "}
        <i>{episodeCodeFormatter(episode.season, episode.number)}</i>
      </h4>
      <div className="episodeImageContainer">
        <img src={episode.image.medium} alt={`still from ${episode.name}`} />
      </div>
      <div className="episodeSummaryContainer">
        <p>{removeParagraphTags(episode.summary)}</p>
      </div>
    </div>
  );
};
