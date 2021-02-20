let firstNames = ["Anna", "Ben", "Abel", "Andrew", "Lilly"];
let lastNames = ["Smith", "Jones", "Brown", "Wilson", "Dalton "];


function fullName(firstName, lastName) {
    return ((name, surname) => {
        for (let i in firstName) {
            console.log(`${firstName[i]} ${lastName[i]}`);
        }
    })(firstNames, lastNames)
}
fullName(firstNames, lastNames)



//======================SECOND ATTEMPT===================

console.log("==============Second attempt============");
(function (firstName, lastName) {
    for (let i in firstName) {
        console.log(`${firstName[i]} ${lastName[i]}`);
    }

})(firstNames, lastNames);
