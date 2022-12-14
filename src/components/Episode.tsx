import { IEpisode } from "../interfaces";
import { episodeCodeFormatter } from "../utils/episodeCodeFormatter";
import { removeParagraphTags } from "../utils/removeParagraphTags";
interface EpisodeProps {
  episode: IEpisode;
}

export const Episode = ({ episode }: EpisodeProps): JSX.Element => {
  return (
    <div className="episodeContainer">
      <h4>
        {episode.name} -{" "}
        <i>{episodeCodeFormatter(episode.season, episode.number)}</i>
      </h4>
      <div className="episodeImageContainer">
        {episode.image && (
          <img
            className="episodesImages"
            src={episode.image.medium && episode.image.medium}
            alt={`still from ${episode.name}`}
          />
        )}
      </div>
      <div className="episodeSummaryContainer">
        <p>{episode.summary && removeParagraphTags(episode.summary)}</p>
      </div>
    </div>
  );
};
