class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    set firstName(firstName) {
        if (!firstName) {
            throw new Error("Please enter first name");
        }
        else {
            console.log("Setting the firstName");
            this._firstName = firstName;
        }
    }
    get firstName() {
        console.log("Getting the value for firstName");
        return this._firstName;
    }
    set lastName(lastName) {
        if (!lastName) {
            throw new Error("Please enter the last name");
        }
        else {
            console.log("Setting the lastName");
            this._lastName = lastName;
        }
    }
    get lastName() {
        console.log("Getting the value for lastName");
        return this._lastName;
    }

    set age(personAge) {
        if (!personAge) {
            throw new Error("Enter the age");
        }
        else {
            console.log("Setting the age");
            this._age = personAge;
        }
    }
    get age() {
        console.log("Getting the value for age");
        return this._age;
    }

    set address(personAddress) {
        if (!personAddress) {
            throw new Error("Enter the address");
        }
        else {
            console.log("Setting the address");
            this._address = personAddress;
        }
    }
    get address() {
        console.log("Getting the value for address");
        return this._address;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, address, subjects) {
        super(firstName, lastName, age, address);
        this.subjects = subjects;
        this.academy = "SEDC";
    }
    static check(student, subject) {
        if (student instanceof Student) {
            if (student.subjects.includes(subject)) {
                console.log(`The student studies ${subject}`);
                return;
            }
            else {
                console.log(`The student doesn't study ${subject}`);
            }
        }
    }
}

let students = [new Student("Anna", "Daglas", 20, "LA", ["C++", "C#"]), new Student("Mike", "Styles", 23, "London", ["Java", "Python"])];

Student.check(students[0], "C#");
Student.check(students[1], "C#");
students[1].fullName();
students[0].fullName();