
//===================TASK ONE===========================
$(document).ready(function () {

    let callApiForPlanets = url => url = "https://swapi.dev/api/planets/?page=1";


    function printPlanets(response) {
        $("#tableForPlanets").append(`<tr><td style="border:1px solid black"><strong>Planet name</strong></td>
    <td style="border:1px solid black"><strong>Population</strong></td>
    <td style="border:1px solid black"><strong>Climate</strong></td>
    <td style="border:1px solid black"><strong>Gravity</strong></td></tr>`)
        for (let planet of response.results) {
            $("#tableForPlanets").append(`<tr><td style="border:1px solid black">${planet.name}</td>
    <td style="border:1px solid black">${planet.population}</td>
    <td style="border:1px solid black">${planet.climate}</td>
    <td style="border:1px solid black">${planet.gravity}</td></tr>`);
        }
    }



    $("#planetBtn").click(function () {
        $.ajax({
            url: callApiForPlanets(),
            success: function (response) {
                $("#tableForPlanets").text("");
                printPlanets(response);
                $("#planetBtn").hide();
                $("#nextTenBtn").css("visibility", "visible");

            }

        })

    })


    //=======================TASK TWO=====================


    $("#nextTenBtn").click(function () {
        $.ajax({
            url: "https://swapi.dev/api/planets/?page=2",
            success: function (response) {
                $("#tableForPlanets").text("");
                printPlanets(response);
                $("#nextTenBtn").hide()
                $("#planetBtn").show();


            }
        })
    })












})
