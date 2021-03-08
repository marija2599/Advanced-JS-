$(document).ready(function () {

    function returnsPromise(input) {
        return new Promise((resolve, reject) => {

            if (typeof (input) !== "string") {

                reject(`Error, enter "string"!`);
            }
            setTimeout(() => {
                resolve($("#text").text(input.toUpperCase()));
            }, 4000)
        })
    }



    returnsPromise("Hello")
        .then(success => {
            console.log("Success");
            console.log(success);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log("End!");
        })




    setTimeout(() => {
        returnsPromise(1)
            .then(success => {
                console.log(success);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                console.log("End!");
            })
    }, 5000)


})