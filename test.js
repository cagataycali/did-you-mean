const didYouMean = require('./index');

didYouMean("Denizli'de hava nası olaca", (output, err) => {
  if (err) console.log(err.code);
  console.log('Output should be true.. ', output.text === "denizli'de hava nasıl");
  console.log(output.status);
  console.log(output.text);
  console.log(output.nlp);
})
