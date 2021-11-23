const person = {
    firstName: 'John',
    lastName: 'Example',
    age: 30,

    letMeIntroduceMyself() {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
};

console.log(person.letMeIntroduceMyself());
