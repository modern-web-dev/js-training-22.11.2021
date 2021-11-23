class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class EmployeeService {
    id = 0;

    save(employee) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({...employee, id: this.id++})
            }, 2000);
        });

    }
}

class EmployeeCtrl {
    constructor(employees) {
        this.employees = employees;
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

    saveEmployee() {
        this.employees.save(
            new Employee(this.firstNameInput.value, this.lastNameInput.value))
            .then(savedEmployee => console.log(savedEmployee));
    }
}

const employees = new EmployeeService();
const controller = new EmployeeCtrl(employees);

// data goes down, events go up!

// function add(a, b) {
//     console.log(this);
//     return a + b;
// }
//
// add(1, 3);
// add.call({name: 'dfsfs'}, 1, 3);
// add.apply({age: 344}, [1, 3]);
