const base32 = require('base32');

function create(url) {
  return base32.encode(url);
}

module.exports.generate = function(url) {
  return create(url);
};

module.exports.write = function(url, outputDir) {
  const fs = require('fs');
  const file = `${outputDir}/id`;
  fs.writeFileSync(file, create(url));
};
