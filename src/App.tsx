import episodesData from "./episodes.json";
import { greet } from "./utils/greet";

console.log(`Imported ${episodesData.length} episode(s)`);
console.log(`First episode's name is ${episodesData[0].name}`);

function App(): JSX.Element {
  return <h1>{greet("World")}</h1>;
}

export default App;
