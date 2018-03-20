var csv_export=require('csv-export');

//require the database

//export data
var fs = require('fs');

csv_export.export(documents,function(buffer){

  //this module returns a buffer for the csv files already compressed into a single zip.
  //save the zip or force file download via express or other server
  fs.writeFileSync('./data.zip',buffer);

});
