# What did you mean?

```bash
$> yarn add what-did-you-mean
```

```javascript
const didYouMean = require('what-did-you-mean');

didYouMean('denizli de hava nası', (output, err) => {
  if (err) console.log(err);
  console.log('Output should be true.. ', output.text === "denizli'de hava nasıl");
})

```
