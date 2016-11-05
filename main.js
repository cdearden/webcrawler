
// Questions: 
// Should I use jQuery? If I use jQuery and this code folows a 
// link to a website without jQuery will that be a problem?



var request = require('request');
var cheerio = require('cheerio');

var seed = 'https://www.kirupa.com/html5/making_http_requests_js.htm';

request(seed, function(error, response, body) {
    if ( !error ) {
      console.log(body);
      getLinks(body);
    }  
});

console.log('out of response');

var getLinks = function (htmlString) {
  $ = cheerio.load(htmlString);
  
  var links = $('a').map(function(element, index) {
    return $(this).attr('href');
  }).get();

  return links;
};
