import { filterEpisodes } from "./filterEpisodes";
import  episodes  from "../episodes.json"
test("greet returns a string, greeting the passed name", () => {
  expect(filterEpisodes("Baelor", episodes)).toEqual([episodes[8]]);
  expect(filterEpisodes("jon and tyrion", episodes)).toEqual([episodes[1]]);
  expect(filterEpisodes("1", episodes)).toEqual([]);
  expect(filterEpisodes("", episodes)).toEqual(episodes);
});