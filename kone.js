const courses = [{  "name": "Orientation to software engineering",
"code"   : "001",
"extent" : 5,
"timing" : "1.semester"
  }, 
{  "name": "Programming",
"code"   : "002",
"extent" : 5,
"timing" : "2.semester"
  }, 
{  "name": "Data management and databases",
"code"   : "003",
"extent" : 5,
"timing" : "2.semester"
  }, 
{  "name": "Mobile development project",
"code"   : "004",
"extent" : 10,
"timing" : "3.semester"
  }
];

var lukumaara = 0;
var kirja = "Don Quihote!";
function ostos() {
    lukumaara = lukumaara + 1;
    alert("Viivakoodi luettu" + "Kirjan tiedot" + lukumaara + " tuotetta.");
}

function osoiteTiedot (form) {
    var viivakoodi = form.viivakoodi.value;
    
    if (viivakoodi == "00100") {
        alert ("Voitto tai kuolema!")
    } else {
        const getBook = courses.find(book => book.code === viivakoodi);
        document.getElementById("answer").innerHTML = (getBook.name + " \n " + getBook.timing);
    }
}