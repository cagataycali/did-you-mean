const didYouMean = require('./index');

didYouMean("hava izmir de nasıl olacak", (output, err) => {
  if (err) console.log(err.code);
  console.log(output.status);
  console.log(output.text);
  console.log(output.nlp);
})
