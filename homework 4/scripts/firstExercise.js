$(document).ready(function () {

    function getPosts(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (response) {
                    resolve(response);
                },
                error: function (errorFunction) {
                    reject(errorFunction);
                }
            })
        })
    }

    function getPostWithId1(details) {
        if (!details || details.length === 0) {
            throw new Error("There are no details about this user!");
        }
        let post1 = details.filter(user => user.id === 1);
        post1.forEach(user => {
            $("#userId").text('User Id:');
            $("#id").text('Id:');
            $("#title").text('Title:');
            $("#body").text('Body:');
            $("#firstUserId").text(user.userId);
            $("#firstId").text(user.id);
            $("#userTitle").text(user.title);
            $("#userBody").text(user.body);

        })





        return new Promise((resolve, reject) => {
            $.ajax({
                url: `https://jsonplaceholder.typicode.com/users/${post1[0].userId}`,
                success: function (data) {
                    resolve(data);

                },
                error: function (error) {
                    reject(error);
                }
            })
        })

    }

    function getUser(user) {
        if (!user || user.length === 0) {
            throw new Error("No user found, try again!");
        };
        $("#userTable").append(`
                    <tr>
               <th style="border: 1px solid black;">Id:</th>
               <td style="border: 1px solid black;"> ${user.id}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Name:</th>
               <td style="border: 1px solid black;"> ${user.name}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Username:</th>
               <td style="border: 1px solid black;"> ${user.username}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Email:</th>
               <td style="border: 1px solid black;"> ${user.email}</td>
               </tr>
               <tr>
               <th>Address:</th>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Street:</th>
               <td style="border: 1px solid black;"> ${user.address.street}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Suite:</th>
               <td style="border: 1px solid black;"> ${user.address.suite}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">City:</th>
               <td style="border: 1px solid black;"> ${user.address.city}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Zipcode:</th>
               <td style="border: 1px solid black;"> ${user.address.zipcode}</td>
               </tr>
               <tr><th ">Geo:</th></tr>
               <tr>
               <th style="border: 1px solid black;">Lat:</th>
               <td style="border: 1px solid black;"> ${user.address.geo.lat}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Lng:</th>
               <td style="border: 1px solid black;"> ${user.address.geo.lng}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Phone:</th>
               <td style="border: 1px solid black;"> ${user.phone}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">Website:</th>
               <td style="border: 1px solid black;"> ${user.website}</td>
               </tr>
               <tr>
               <th>Company:</th>
               </tr>
               <tr>
               <th style="border: 1px solid black;"> Name:</th>
               <td style="border: 1px solid black;"> ${user.company.name}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;"> catchPhrase:</th>
               <td style="border: 1px solid black;"> ${user.company.catchPhrase}</td>
               </tr>
               <tr>
               <th style="border: 1px solid black;">bs:</th>
               <td style="border: 1px solid black;"> ${user.company.bs}</td>
               </tr>`);

    }








    getPosts("https://jsonplaceholder.typicode.com/posts")
        .then(details => {
            return getPostWithId1(details);

        })
        .then(userDetails => {
            getUser(userDetails);
        })
        .catch(error => {
            console.log(error);
        })




})