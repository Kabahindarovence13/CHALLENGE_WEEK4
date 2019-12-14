const pickData = require("./index.js");
const sources = [1, 2, 3, 4];
console.log("1. al-jazeera-english\n2. BBC News\n3. CBS News\n4. abc-news\n");

const news_sources = {
  1: "al-jazeera-english",
  2: "BBC News",
  3: "CBS News",
  4: "abc-news"
};

test("Enter a number of one to get al-jazeera-english", () => {
  expect(news_sources[1]).toBe("al-jazeera-english");
  expect(news_sources[2]).toBe("BBC News");
  expect(news_sources[3]).toBe("CBS News");
  expect(news_sources[4]).toBe("abc-news");
});

test("no news_source should be null", () => {
  expect(news_sources[2]).not.toBeNull();
});

test("When you enter a number above the ones in sources", () => {
  expect(news_sources[5]).toBeFalsy();
});
