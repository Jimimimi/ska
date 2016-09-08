// Should create
//  folder -> layout/sections/section_name
//  angular module
//  html file
//  angular controller
//  angular routes

var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

var moduleName,
    dataType;

// Create folder
var base = 'client/src/layout/sections/';
if (process.argv.length > 2){

  moduleName = process.argv[2];
  var dir = path.resolve(base + moduleName);

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  } else {
    console.log('** Error: A module with that name already exists');
  }
} else {
  console.log('** Error: please give your module a name');
}


// create angular module
fs.readFile('client/src/core/tools/templates/section.module.js', function(err, data){
  dataType = 'module';
  parseData(err, data);
});



// fs.createReadStream('');

// readStream.on('open', function () {
//     // This just pipes the read stream to the response object (which goes to the client)
//     readStream.pipe(res);
//   });
// var writeStream = fs.createWriteStream(dir + moduleName + '.module.js' );

// create html file

fs.readFile('client/src/core/tools/templates/section.html', function(err, data){
  dataType = 'html';
  parseData(err, data);
});

// create angular controller

fs.readFile('client/src/core/tools/templates/section.controller.js', function(err, data){
  dataType = 'controller';
  parseData(err, data);
});
// create angular routes


function readAndCreate(err, data){
  // parseData(err, data,)
}
function parseData(err, data){


  if(err) throw err;
  var extension;
  var datString = data.toString();

  // create extension;
  switch (dataType) {
    case 'module':
      extension = '.module.js';
      break;

    case 'controller':
      extension = '.controller.js';
      break;

    case 'html':
      extension = '.html';
      break;
    default:
      extension = '.error';

  }


  mod = replaceAll(datString, '<>', moduleName);
  var fileString = dir +'/'+ moduleName + extension;
  // console.log(fileString);
  fs.writeFile(fileString, mod, function(err, res){
    if (err) throw err;
    console.log('Result:', res);
  });

}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
}

function error(e){
  console.log('** Error: ', e);
}

function success(r){
  console.log('!! Success !!', r);
}
