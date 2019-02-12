// read a CSV file
var csvParser = new SimpleExcel.Parser.CSV();
var fileInput = document.getElementById('fileInput');
var dropzoneInput = document.getElementById('dropZoneInput');


/**
 * Event listener fileInput
 */
fileInput.addEventListener('change', function (e) 
{  
    var file = e.target.files[0];
    loadFile(file);
});

/**
 * Event listener dropZoneInput
 */
dropzoneInput.addEventListener('drop', function(e)
{
    var file = e.target.files[0];
    loadFile(file);
});

/**
 * Loading file main function
 */
function loadFile(file)
{
    csvParser.loadFile(file, function () {
        console.log(csvParser.getSheet()); // print!
    });
}


/**
 * ScanTest Function
 */
function scanTest()
{
    // const html = fetch("https://www.ville-lechambonsurlignon.fr/professionnels-sante/medecins-1.html").text(); // html as text
    // const doc = new DOMParser().parseFromString(html, 'text/html');
    // doc.title; doc.body;
    // console.log(doc.title);

    var name = "medecins-1";
    var url = "https://www.ville-lechambonsurlignon.fr/professionnels-sante/medecins-1.html";
    $.get(url, function(response) {
        console.log(response);
    });
}