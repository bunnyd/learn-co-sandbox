function doNothing() {
  console.log('Hello!')
}

doNothing()

function sayHelloToIsabel(){
  console.log("Hello, Isabel!")
}

function sayHelloToSofia(){
  console.log("Hello, Sofia!")
}

function sayHelloToBrendan() {
  console.log("Hello, Brendan!")
}


function sayHelloTo(firstName){
  console.log(`Hello, ${firstName}!`)
}
  sayHelloTo('Isabel')
  sayHelloTo('Jane')
  sayHelloTo('R2-D2')
  sayHelloTo(1)

function doSomething(thing) {
  console.log(thing)
}

/*doSomething('anything')*/

function say(greeting, firstName){
  return `${greeting}, ${firstName}!`
  console.log('I was called')
}

say("Hello", "Sofia")
say("Howdy", "partner")

function add(x, y){
  return x + y
}

add(1, 2)


function speaker() {
  sentence = 'Bird is the word.';
}
 
speaker();
console.log(sentence);


var cuteAnimal = 'quokka';
 
function makeVariable() {
  var cuteAnimal = 'sugar glider';
  return cuteAnimal;
}
 
makeVariable(); 

cuteAnimal;
