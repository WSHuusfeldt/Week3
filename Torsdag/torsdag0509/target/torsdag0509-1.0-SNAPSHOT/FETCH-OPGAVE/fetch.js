
let url = "https://jsonplaceholder.typicode.com/users/1"; //Jeg kunne ikke få det til at fungere med forskellige ID, det skal derfor skiftes manuelt her.

fetch(url)
    .then(res => res.json()) //in flow1, just do it
    .then(data => {   
        document.getElementById("output").innerHTML =
        "<tr><td>" + data.name + '</td>' +
        "<td>" + data.phone + '</td>' +
        "<td>" + data.address.street + '</td>' +
        "<td>" + data.address.zipcode + '</td>' +
        "<td>" +data.address.geo.lat + "," + data.address.geo.lng + '</td>'
    })

