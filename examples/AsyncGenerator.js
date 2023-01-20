import fetch from "node-fetch";

function fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;
  return {
    [Symbol.asyncIterator]: async function* () {
      while (url) {
        const response = await fetch(url, {
          // (1) first api request
          headers: { "User-Agent": "Our script" }, // required header
        });
        const body = await response.json(); // response is promise
        let nextPage = response.headers
          .get("Link")
          .match(/<(.*?)>; rel="next"/);
        nextPage = nextPage?.[1];

        url = nextPage; // will be terminated when url is null
        for (let commit of body) {
          // yield the commit one by one
          yield commit.sha;
        }
      }
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
