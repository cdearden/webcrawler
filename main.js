

var request = require('request');
var cheerio = require('cheerio');

var seed = 'https://www.kirupa.com/html5/making_http_requests_js.htm';

var crawl = function (url) {

  request(url, function(error, response, body) {

    if ( !error ) {
      console.log('Crawling ' + url);  

      var links = getLinks(body);
      
      for ( var i = 0; i < links.length; i++ ) {
        crawl(links[i]);
      }

    }  
  
  });
};

var getLinks = function (htmlString) {
  $ = cheerio.load(htmlString);
  
  var links = $('a').map(function(element, index) {
    return $(this).attr('href');
  }).get();

  return links;
};
  

crawl(seed);