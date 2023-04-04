class Employee {
    constructor(name, pos, sal) {
        this.name = name
        this.position = pos
        this.salary = sal
    }

    getSalary() {
        return `Salary is ${this.salary}`
    }
}


let employee1 = new Employee("Akash", "Web Developer", 80000)
console.log(employee1.getSalary())