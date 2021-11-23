const person = {
    'first-name': 'Marek',
    lastName: 'Matczak',
    id: 0
}

// const propName = 'firstName'

// falsy
// false, null, undefined, 0, '', NaN

person['first-name'] = 'Czarek';
person.age = 33;

delete person.age;

console.log(person);
