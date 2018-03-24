//require the database
var CSVinfo = []; //Array that will contain all info from database (minus sensitive info)
$(document).ready(function() {
  getsurveydata();
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


function getsurveydata(){
$.get('/api/user', function(res){
  console,log(res);
// }.done()
// console.
   // Get Profile User Data Using data-attributes.

   // let uName = res.full_name;
   // let uId = res.id;
   // let uColor = res.color;
   // let uEmail = res.email;
   // let uLocation = res.location;
   // let uBio = res.bio;
   // let uGoalCount = res.goal_count;
   // let uInitials = function(){
   //   let splitName = uName.toUpperCase().split(' ');
   //   let initials = splitName[0].charAt(0) + splitName[1].charAt(0);
   //   // Directly return the joined string
   //   return initials.trim();
   // }
 });
};
