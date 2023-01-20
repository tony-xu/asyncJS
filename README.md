# Async Process in Jasvascript

## example AsyncAwait4.js
Understand the execution sequence of async/await and setTimeout callback.

## example AsyncExecutor.js
Basically this example will tell us how the Async/Await is transpiled to Generator, and how to execute the Generator and get the result what we want.

## example AsyncIterator.js
When we need to fetch data from remove, like fetch a repo's commits, no idea how many requests we need to do, and also just want to deal with the eventually result, we can use the [Symbol.asyncIterator] and loop the result async by using for await of.

## example AsyncGenerator.js
Same concept as AsyncIterator, but produce a Async generator which can make the code much smaller. 