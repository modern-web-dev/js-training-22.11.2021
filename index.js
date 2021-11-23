const myNumbers = [2, 4, 8, 12, 56, 13];

const copy = [...myNumbers, 23, 56];

const person = {
    firstName: 'Marek',
    lastName: 'Matczak',
    age: 42
};

// const personCopy = {
//     ...person,
//     firstName: 'Czarek'
// };

const personCopy = Object.assign(
    {}, person, {firstName: 'Czarek'});

console.log(sayHelloTo(person));

function sayHelloTo({firstName, ...rest}) {
    console.log(rest);
    return `Hello ${firstName}!`
}
