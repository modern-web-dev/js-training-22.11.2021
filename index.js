class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class EmployeeCtrl {
    constructor() {
        const employeeForm = document.querySelector('form');
        this.firstNameInput = employeeForm.querySelector('#firstName');
        this.lastNameInput = employeeForm.querySelector('#lastName');
        employeeForm.addEventListener('submit',
            event => {
                event.preventDefault();
                this.saveEmployee();
            }
        );
    }

    // A - apply
    // B - bind
    // C - call

    saveEmployee() {
        console.log(
            new Employee(this.firstNameInput.value, this.lastNameInput.value));
    }
}

const controller = new EmployeeCtrl();
// controller.firstNameInput.value = 'Marek';
// controller.saveEmployee();

// data goes down, events go up!

// function add(a, b) {
//     console.log(this);
//     return a + b;
// }
//
// add(1, 3);
// add.call({name: 'dfsfs'}, 1, 3);
// add.apply({age: 344}, [1, 3]);
