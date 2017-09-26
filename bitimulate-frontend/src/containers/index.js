// imports all file except index.js
const req = require.context('.', true, /^(?!.\/index).*.js$/);

// make it into an object
req.keys().forEach((key) => {
  const containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
})
