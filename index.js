function theBeatlesPlay(musicians,instruments){
  var sentence = [];
  for (var i=0; i < musicians.length; i++){
  sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}

function johnLennonFacts(facts){
  var i=0
  var exclaim = []
  while (i<facts.length){
  exclaim.push(`${facts[i]}!!!`)
  return exclaim
  }
  
}