const https = require("https");

//Prompt user to input new source
console.log("Please enter a number of one of the news source:\n");
console.log("1. al-jazeera-english\n2. BBC News\n3. CBS News\n4. abc-news\n");
//sites from which to pick data as specified
const pickData = () => {
  const news_sources = {
    1: "al-jazeera-english",
    2: "BBC News",
    3: "CBS News",
    4: "abc-news"
  };

  // Get process.stdin as the standard input object.
  const standard_input = process.stdin;

  // Set input character encoding.
  standard_input.setEncoding("utf-8");

  let user_input = "";

  // When user input data and click enter key.
  standard_input.on("data", data => {
    const sources = [1, 2, 3, 4];

    // convert string to int
    const num_data = Number(data);

    // User input exit.
    if (data === "exit\n") {
      process.exit();
    } else if (!sources.includes(num_data)) {
      // Program exit.
      console.log("Please input a valid news source");
    } else {
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources[num_data]}&pageSize=10&apiKey=402fb0f2aa7f4383b5c19aed30c0651c`;

      https
        .get(url, response => {
          let data = "";

          // A chunk of data has been received
          response.on("data", chunk => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);
          });
        })
        .on("error", err => {
          error = err;
          console.log("Error", err);
        });
      //   process.exit();
    }
  });
};

pickData();
