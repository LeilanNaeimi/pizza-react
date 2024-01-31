'use strict';
//Api i use:
//// https://dictionaryapi.dev/

const wordDefenition = function (word) {
  return (
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word} `)
      .then(response => {
        if (!response.ok) throw new Error(`error code :${response.status}`);
        //console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(
          `the ${word} meaning is: `,
          data[0].meanings[0].definitions[0].definition
        );

        return fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word} `
        );
      })
      .then(response => {
        if (!response)
          throw new Error(`Not Found ${response.status}
      `);
        return response.json();
      })
      //.then(data => console.log(data))
      .catch(err => console.error(`${err.message} 💥`))
  );
};

wordDefenition('book');


////