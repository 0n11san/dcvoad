// var csv_export=require('csv-export');

//require the database
var CSVinfo = []; //Array that will contain all info from database (minus sensitive info)
$(document).ready(function() {
    // http request
      $.getJSON("/api/test", function(data) {
        console.log(data);
          $.each(data, function(i, val){
         // CSVinfo.push(val);
         // document.getElementById("test").append("<p>"+val.name+"</p>");
         var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(val.name);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("test").appendChild(node);     // Append <li> to <ul> with id="myList"

          });
    // alert(CSVinfo) ;
       });


       ////////////////////////////



       var doc = new jsPDF();
       var specialElementHandlers = {
           '#editor': function (element, renderer) {
               return true;
           }
       };
       var button = document.getElementById("cmd");

       button.onclick = function () {
         console.log('hello');
           doc.fromHTML($('#test').html(), 15, 15, {
               'width': 170,
                   'elementHandlers': specialElementHandlers
           });
           doc.save('sample-file.pdf');
       };


       //////////////////////
});





// console.log(CSVinfo);

//export data
// var fs = require('fs');

// csv_export.export(documents,function(buffer){
//
//   //this module returns a buffer for the csv files already compressed into a single zip.
//   //save the zip or force file download via express or other server
//   fs.writeFileSync('./data.zip',buffer);
//
// });
