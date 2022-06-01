// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop('Garfileld');
}
function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
}

    function appendCat(){
        var newArray = [...cats, "Broom"];
        return newArray;
      }
      
      function prependCat(){
        var newArray = ["Arnold",...cats];
        return newArray;
      }

      function removeLastCat(){
        var newArray = cats.slice(0, cats.length - 1);
        return newArray;
      }

      function removeFirstCat(){
        var newArray = cats.slice(1);
        return newArray;
      }
