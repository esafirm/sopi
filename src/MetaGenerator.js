// This files is reponsible generating others data beside images

const fs = require('fs');
const idGenerator = require('./IdGenerator');

// @param body response body of sophee item
module.exports.write = function(url, parsedBody, outputDir) {
  const desc = `${parsedBody.item.description}\n\nID: ${idGenerator.generate(
    url
  )}`;
  createFile(`${outputDir}/desc`, desc);
};

function createFile(path, content) {
  fs.writeFileSync(path, content);
}
