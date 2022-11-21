import { episodeCodeFormatter } from "./episodeCodeFormatter";

test("greet returns a string, greeting the passed name", () => {
  expect(episodeCodeFormatter(1, 1)).toBe("S01E01");
  expect(episodeCodeFormatter(12, 3)).toBe("S12E03");
  expect(episodeCodeFormatter(4, 12)).toBe("S04E12");
});
