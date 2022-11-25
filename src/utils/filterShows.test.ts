import { filterShows } from "./filtersFunctions";
import showsData from "../shows.json";

test("filterShows should return an array of filtered Shows", () => {
  expect(filterShows("", showsData, 250)).toEqual([showsData[0]]);
  expect(filterShows("kirby buckets", showsData, undefined)).toEqual([showsData[0]]);
  expect(filterShows("downton", showsData, undefined)).toEqual([showsData[1]]);
  expect(filterShows("", showsData, 252)).toEqual([showsData[2]]);
});
