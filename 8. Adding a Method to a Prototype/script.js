const Student = function (name) {
    this.name = name
}

Student.prototype.printDetails = function () {
    console.log(`Hello, the student is ${this.name}`);
}


const student1 = new Student("Mithun")
const student2 = new Student("Akash")
const student3 = new Student("Sonal")
student1.printDetails()
student2.printDetails()
student3.printDetails()