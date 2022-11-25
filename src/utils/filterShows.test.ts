import { filterShows } from "./filtersFunctions";
import { IShow } from "../interfaces";
import showsData from "../shows.json";

test("filterShows should return an array of filtered Shows", () => {
  expect(filterShows("Kirby Buckets", showsData)).toEqual([showsData[0]]);
  expect(filterShows("kirby buckets", showsData)).toEqual([showsData[0]]);
  expect(filterShows("downton", showsData)).toEqual([showsData[1]]);
  expect(filterShows("Girl Meets", showsData)).toEqual([showsData[2]]);
});
