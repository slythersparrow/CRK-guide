var rawbase = 'https://raw.githubusercontent.com/';
var jsonloc = '/slythersparrow/CRK-guide/main/scripts/json/test.json';

$.getJSON(rawbase + jsonloc, function( data ) {
    console.log(data);
    //do what you want with data
    const db = data;
    document.getElementById("cookieName").innerHTML = "It worked?";
});

document.getElementById("demo2").innerHTML = db.cookie_crunchy.cookieName;