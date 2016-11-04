
// Questions: 
// Should I use jQuery? If I use jQuery and this code folows a 
// link to a website without jQuery will that be a problem?


var request = require('request');

module.exports = {
  crawl: function ( url ) {
  var page = getPage(url);

  var links = page.match(/(href=')?.*(')?/);

  console.log(links);
},


  getPage: function ( url ) {
  var page;
  request( url, function(error, response, body) { 
    if( !error ) {
       page = body;
    }
  });  
  return page;
}


};