import { removeParagraphTags } from "./removeParagraphTags";

test("removeParagraphTags should remove any html p tags", () => {
  expect(removeParagraphTags("<p>World</p>")).toBe("World");
  expect(removeParagraphTags("<p>Richard is my name</p>")).toBe(
    "Richard is my name"
  );
  expect(removeParagraphTags("Academy Scholars")).toBe("Academy Scholars");
});
