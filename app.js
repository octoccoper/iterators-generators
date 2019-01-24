// // Iterator
// function showNames(names) {

// let nextIndex = 0;

// return {
//     next: function() {
//         return nextIndex < names.length ?
//         { value: names[nextIndex++], done:false } :
//         {done: true}
//     }
// }
// }

// // Array of names
// let arr = ["John Bomba", "Elli Gr", "Zozo Zimbulia"];

// // Initialize iterator
// let names = showNames(arr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// // Generator
// function* sayNames() {
//     yield "Jack";
//     yield "Jackie";
//     yield "Jackobo";
// }

// let name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// Ids Generator
function* createId() {
    let index = 0;
    while(true) {
        yield index++;
    }
}

let generate = createId();

console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);