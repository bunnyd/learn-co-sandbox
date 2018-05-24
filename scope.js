	function outerFunction() {
	 var innerVariable = "I'm sort of a secret.";
 
	 return function innerScope() {
	   var inaccessible = "Nothing can touch me.";
 
	   return inaccessible;
	 }
	}

var test = outerFunction()()
console.log(test)

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
  
}


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
console.log(theFunk)