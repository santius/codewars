function spinWords(phrase){
  var words = phrase.split(" ");
  words.forEach (async function (item, index) {
   if (item.length > 4) { words [index] = item.split("").reverse().join("")};
  });
  return words.join(" ");
}

spinWords ("Hola como andas");
