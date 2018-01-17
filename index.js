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
  i++
  }
  return exclaim
}

function iLoveTheBeatles(n){
  var love = []
  var i = n
  if(n != 17){
    do{
    love.push(`I love the Beatles!`)
    i--
    } while(i<15)
  } 
  else {
    love.push(`I love the Beatles!`)
  }
  return love
}