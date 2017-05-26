var names = ['Hugo','Paco','Luis'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('George'));

// var person = {
//   name: 'George',
//   greet: function(){
//     names.forEach(function(name){
//       console.log(this.name + ' say hi to ' + name);
//     });
//   }
// };

var person = {
  name: 'George',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' say hi to ' + name);
    });
  }
};

person.greet()

// Challenge
function add(a, b){
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));
// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(1,6));
// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(1,6));
