// This files is reponsible generating others data beside images

const fs = require('fs');
const idGenerator = require('./IdGenerator');
const config = require('../config');

// @param body response body of sophee item
module.exports.write = function(url, parsedBody, outputDir) {
  const id = `\n\nID: ${idGenerator.generate(url)}`;
  const desc =
    config.descPrefix + parsedBody.item.description + id + config.descSuffix;

  createFile(`${outputDir}/desc`, desc);
};

function createFile(path, content) {
  fs.writeFileSync(path, content);
}
