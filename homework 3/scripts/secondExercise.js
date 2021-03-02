
let xhr2 = new XMLHttpRequest();
xhr2.onload = function () {
    if (xhr2.status >= 200 && xhr2.status < 300 && xhr2.readyState == 4) {
        let jsObject = JSON.parse(xhr2.response);
        console.log("========Students with average grade higher than 3:=====");
        let studentsWithAvgGradeHigherThan3 = jsObject.filter(function (student) {
            if (student.averageGrade > 3) {
                console.log(`${student.firstName} ${student.lastName}`);
            }
        })

        console.log("=====Female names with average grade 5:=====")
        let femaleNamesAvgGrade5 = jsObject.filter(student => student.averageGrade === 5 && student.gender === "Female");
        femaleNamesAvgGrade5.forEach(student => console.log(`${student.firstName}`));


        console.log("========Male students from Skopje that have over 18years old:=====");
        let maleStudentsFromSkOver18 = jsObject.filter(student => student.city === "Skopje" && student.age > 18);
        maleStudentsFromSkOver18.forEach(student => console.log(`${student.firstName} ${student.lastName}`));




        console.log("=======The average grades of all female students over the age of 24========");
        let averageOfFemaleOver24 = jsObject.filter(student => student.age > 24);
        averageOfFemaleOver24.map(student => console.log(student.averageGrade));


        console.log("======All male students with a name starting with B and average grade over 2==========")
        let malesThatStartWithB = jsObject.filter(student => student.averageGrade > 2 && student.firstName.charAt(0) == "B");
        malesThatStartWithB.forEach(student => console.log(`${student.firstName} ${student.lastName}`));

    }
}

xhr2.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");
xhr2.send();