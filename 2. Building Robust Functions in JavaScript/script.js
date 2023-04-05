function getPerson(person) {
    try {
        if (!person || !person.name || !person.age)
            throw console.error("Invalid Parameter Type");
        else {
            return `Name: ${person.name}, Age: ${person.age}`
        }
    }

    catch {

    }
}


console.log(getPerson({ name: "Mithun", age: 20 }));
console.log("+++++++++++++++++++++++++++++++++++++");

console.log(getPerson({ name: "Mithun" }));
console.log("+++++++++++++++++++++++++++++++++++++");

console.log(getPerson(["name", "Mithun"]));