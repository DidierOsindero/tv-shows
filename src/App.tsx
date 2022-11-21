import episodesData from "./episodes.json";
import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="appContainer">
      <Header />
      <MainContent episodesData={episodesData} />
      <Footer />
    </div>
  );
}

export default App;
