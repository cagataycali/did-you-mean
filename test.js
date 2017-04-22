const didYouMean = require('./index');

didYouMean('denizli de hava nası', (output, err) => {
  if (err) console.log(err);
  console.log('Output should be true.. ', output.text === "denizli'de hava nasıl");
})
