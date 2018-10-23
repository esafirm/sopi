// This files is reponsible generating others data beside images

const fs = require('fs');

// @param body response body of sophee item
module.exports.write = function(parsedBody, outputDir) {
  console.log('parsed', parsedBody);
  createFile(`${outputDir}/desc`, parsedBody.item.description);
};

function createFile(path, content) {
  fs.writeFileSync(path, content);
}
