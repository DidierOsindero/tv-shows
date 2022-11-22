//import episodesData from "./episodes.json";
import "./App.css";
import { Header } from "./components/Header";
import { IEpisode } from "./interfaces";
import { IShow } from "./interfaces";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [episodesData, setEpisodesData] = useState<IEpisode[]>([]);
  const [showData, setShowData] = useState<IShow[]>([]);

  const fetchEpisodesData = async (showID?: string) => {
    const URL: string = showID
      ? `https://api.tvmaze.com/shows/${showID}/episodes`
      : "https://api.tvmaze.com/shows/496/episodes";
    console.log(URL, showID);
    const response = await fetch(URL);
    const fetchedDataJSON = await response.json();
    setEpisodesData(fetchedDataJSON);
  };

  const changeEpisodesData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    fetchEpisodesData(e.target.value);
  };

  const fetchShowData = async () => {
    const response = await fetch("http://api.tvmaze.com/shows?page=1");
    const fetchedDataJSON = await response.json();
    setShowData(fetchedDataJSON);
  };

  useEffect(() => {
    fetchEpisodesData();
    fetchShowData();
  }, []);

  return (
    <div className="appContainer">
      <Header />
      <MainContent
        onClick={changeEpisodesData}
        episodesData={episodesData}
        showData={showData}
      />
      <Footer />
    </div>
  );
}

export default App;
