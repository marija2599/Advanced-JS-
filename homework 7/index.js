function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function () {
        console.log(`Please give ${this.name} food.He/She is hungry!`);
    }
    this.sleep = function () {
        console.log(`Shhhhhh..${this.name} is sleeping.`);
    }
}


function Cat(color, ownerId, name, age) {
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color;
    this.ownerId = ownerId;
    this.meow = function () {
        console.log(`The cat ${this.name} says Meow!!!`);
    }
    this.printOwnerDetails = function (owner) {
        if (this.ownerId == null || undefined) {
            console.log("This cat doesn't have an owner!");
        }
        else {
            let details = owner.filter(owner => owner.id == this.ownerId)
            console.log(details);
        }
    }
}


let people = [new Person(1, "Anna", "Grey", 26), new Person(2, "Mike", "Johnson", 31), new Person(3, "Jacob", "Blue", 21), new Person(4, "Megan", "Markle", 34), new Person(5, "Harry", "Styles", 24)];
let colors = ["white", "black", "gray", "brown", "yellow"];
let cats = [new Cat(colors[0], 2, "Lilly", 1), new Cat(colors[4], 4, "Garfield", 4)];


function PersianCat(eyeColor, color, ownerId, name, age) {
    Object.setPrototypeOf(this, new Cat(color, ownerId, name, age));
    this.eyeColor = eyeColor;
    this.furDescription = function () {
        console.log(`The cat ${this.name} has full fur!`);
    }
}


function RagDollCat(weight, isFriendly, color, ownerId, name, age) {
    Object.setPrototypeOf(this, new Cat(color, ownerId, name, age));
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function (type) {
        if (type == true) {
            console.log(`The cat ${this.name} is friendly!!`);
            isFriendly = true;
        }
        else {
            console.log(`The cat ${this.name} is not friendly!!`);
            isFriendly = false;
        }
    }
}

let persianCat = new PersianCat("blue", colors[0], 3, "Emili", 10);
let ragDollCat = new RagDollCat("green", true, colors[2], 5, "Andrew", 5);





cats[0].eat();
cats[0].printOwnerDetails(people);
cats[1].sleep();
cats[1].printOwnerDetails(people);

persianCat.furDescription();
persianCat.printOwnerDetails(people);
ragDollCat.printPersonality(false);
