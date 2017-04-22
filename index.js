const translate = require('google-translate-api');
const Entities = require('html-entities').AllHtmlEntities;
entities = new Entities();

const didYouMean = (text, callback) => {
  translate(text, {to: 'en'})
    .then((translated) => {
      if (translated.from.text.didYouMean || translated.from.text.autoCorrected) {
        let correctedSpelling = translated.from.text.value.replace(/\[/g, '');
        correctedSpelling = correctedSpelling.replace(/]/g, '');
        correctedSpelling = entities.decode(correctedSpelling)
        let response = {
          status: true,
          text: correctedSpelling,
          details: translated
        }
        callback(response, null)
      } else {
        let response = {
          status: false,
          text: translated.text,
          details: translated
        }
        callback(response, null)
      }
    })
    .catch((err) => {
      callback(null, err)
    })
}

module.exports = didYouMean;
