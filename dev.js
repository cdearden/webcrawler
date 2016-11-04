var request = require('request');

var crawl = function ( url ) {
  var page = getPage(url);

  var links = page.match(/(href=')?.*(')?/);

  console.log(links);
};
  

var getPage  = function ( url ) {
  var doc;
  request( url, function(error, response, body) { 
    if( !error ) {
       doc = body.toString();
       //console.log(doc); 
    }
  });  
  console.log(doc);
  return doc;
};

var page = 'http://blog.modulus.io/node.js-tutorial-how-to-use-request-module';

console.log(getPage(page)); 