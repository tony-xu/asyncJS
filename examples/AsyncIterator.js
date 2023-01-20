// providing a function which can continuously fetch and return data in bulk.
import fetch from "node-fetch";

function fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;
  return {
    [Symbol.asyncIterator]: function () {
      return {
        url: url,
        dynamicResult: [],
        async next() {
          if (!this.url) {
            return { value: undefined, done: true };
          }
          if (!this.dynamicResult.length) {
            const response = await fetch(url, {
              // (1) first api request
              headers: { "User-Agent": "Our script" }, // required header
            });
            const body = await response.json(); // response is promise
            let nextPage = response.headers
              .get("Link")
              .match(/<(.*?)>; rel="next"/);
            nextPage = nextPage?.[1];

            this.url = nextPage; // will be terminated when url is null
            this.dynamicResult = body;
          }
          return { value: this.dynamicResult.shift().sha, done: false };
        },
      };
    },
  };
}

let count = 0;
for await (let commit of fetchCommits(
  "javascript-tutorial/en.javascript.info"
)) {
  console.log(commit);
  count++;
  if (count >= 2) {
    break;
  }
}
