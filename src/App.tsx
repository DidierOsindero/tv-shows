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

  const fetchEpisodesData = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const fetchedDataJSON = await response.json();
    setEpisodesData(fetchedDataJSON);
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
      <MainContent episodesData={episodesData} showData={showData} />
      <Footer />
    </div>
  );
}

export default App;
