$(document).ready(function () {
    $("#button").click(function () {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon",
            success: function (response) {
                while (response.results.length = 10) {

                    for (let data of response.results) {
                        $("#list").after(`<li> <strong>Name:</strong> ${data.name} <strong> Url:</strong> ${data.url}</li>`)

                    }
                    break;
                }

            },
            error: function (response) {
                console.log("Error!");
            }
        });

    })

});


















