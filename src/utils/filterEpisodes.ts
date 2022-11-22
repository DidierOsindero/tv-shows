import { IEpisode } from "../components/MainContent";

export const filterEpisodes = (currentSearchText: string ,episodes: IEpisode[]): IEpisode[] => {

    const filteredArr: IEpisode[] = episodes.filter(el => {
      const isMatchingSearchText = el.name.toLowerCase().includes(currentSearchText.toLowerCase()) || el.summary.toLowerCase().includes(currentSearchText.toLowerCase());
      return isMatchingSearchText;
    })
    return filteredArr;
  }