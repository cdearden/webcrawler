

var request = require('request');
var cheerio = require('cheerio');

var seed = process.argv[2];

var history = {};

var crawl = function (url, history) {

  request(url, function(error, response, body) {

    if ( !error ) {
      history[url] = url;
      console.log('Crawling ' + url); 
      var links = getLinks(body);
  
      for ( var i = 0; i < links.length; i++ ) {
        if ( !(links[i] in history) ) {
          crawl(links[i], history);
        }
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
  

crawl(seed, history);