function theBeatlesPlay(musicians,instruments){
  var sentence = [];
  for (var i=0; i < musicians.length; i++){
  sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}