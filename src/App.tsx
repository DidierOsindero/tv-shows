//import episodesData from "./episodes.json";
import "./App.css";
import { Header } from "./components/Header";
import { IEpisode, MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [episodesData, setEpisodesData] = useState<IEpisode[]>([]);

  const fetchEpisodesData = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const fetchedDataJSON = await response.json();
    setEpisodesData(fetchedDataJSON);
  };

  useEffect(() => {
    fetchEpisodesData();
  }, []);

  return (
    <div className="appContainer">
      <Header />
      <MainContent episodesData={episodesData} />
      <Footer />
    </div>
  );
}

export default App;
