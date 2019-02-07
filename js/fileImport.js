// read a CSV file
var csvParser = new SimpleExcel.Parser.CSV();
var fileInput = document.getElementById('fileInput');
// parse when file loaded, then print the result to console
fileInput.addEventListener('change', function (e) 
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