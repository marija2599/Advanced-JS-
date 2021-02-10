document.getElementById("button").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {

            response.json().then(
                function (users) {

                    let dataTable = document.getElementById("userData");
                    dataTable.innerHTML = `
               <tr>
               <th style="border: 1px solid black;">Id:</th>
               <td style="border: 1px solid black;"> ${users.id}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Name:</th>
               <td style="border: 1px solid black;"> ${users.name}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Username:</th>
               <td style="border: 1px solid black;"> ${users.username}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Email:</th>
               <td style="border: 1px solid black;"> ${users.email}</td>
               </tr>
               <tr>
               <th>Address:</th>
               </tr>
               <tr>
               <td style="border: 1px solid black;">Street:</td>
               <td style="border: 1px solid black;"> ${users.address.street}</td>
               </tr>
               <tr>
               <td style="border: 1px solid black;">Suite:</td>
               <td style="border: 1px solid black;"> ${users.address.suite}</td>
               </tr>
               <tr>
               <td style="border: 1px solid black;">City:</td>
               <td style="border: 1px solid black;"> ${users.address.city}</td>
               </tr>
               <tr>
               <td style="border: 1px solid black;">Zipcode:</td>
               <td style="border: 1px solid black;"> ${users.address.zipcode}</td>
               </tr>
               <tr><th ">Geo:</th></tr>
               <tr>
               <td style="border: 1px solid black;">Lat:</td>
               <td style="border: 1px solid black;"> ${users.address.geo.lat}</td>
               </tr>
               <tr>
               <td style="border: 1px solid black;">Lng:</td>
               <td style="border: 1px solid black;"> ${users.address.geo.lng}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Phone:</th>
               <td style="border: 1px solid black;"> ${users.phone}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Website:</th>
               <td style="border: 1px solid black;"> ${users.website}</td>
               </tr>
               <tr>
               <th>Company:</th>
               </tr>
               <tr>
               <td style="border: 1px solid black;"> Name:</td>
               <td style="border: 1px solid black;"> ${users.company.name}</td>
               </tr>
               <tr>
               <td style="border: 1px solid black;"> catchPhrase:</td>
               <td style="border: 1px solid black;"> ${users.company.catchPhrase}</td>
               </tr>
               <tr>
               <td style="border: 1px solid black;">bs:</td>
               <td style="border: 1px solid black;"> ${users.company.bs}</td>
               </tr>`;





                }

            )

        })
        .catch(function (error) {
            console.log("ERROR");
        })
})