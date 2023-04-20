var reader = require('any-text');

reader
  .getText(`./2-warm-up - expressions+word formation.pdf`)
  .then(function (data) {
    console.log(data); // handle success
  })
  .catch(function (error) {
    console.log(error); // handle error
  });
