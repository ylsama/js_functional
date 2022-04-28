function makeAdjectifier(adjectifier) {
  return function (string) {
    return adjectifier + " " + string;
  }
}
function greet(name) {
  var greeting = "Hi, i'm";
  return (greeting +" " + name);
}

var cooler = makeAdjectifier("Cooler greeting")

console.log(cooler("Nghia"))
console.log(greet("Nghia"))
