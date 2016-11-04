
// Questions: 
// Should I use jQuery? If I use jQuery and this code folows a 
// link to a website without jQuery will that be a problem?
var crawl = function (url, config) {
  var num = 0;
  
  // var src = URL.createObjectURL(url);
  // var doc = window.document; 
  // var children = root.childNodes;

  location.assign(url);
  console.log(url);

  document.ready();
  var links = document.links;


  for ( var i = num ; i < links.length ; i++ ) {
     console.log( links[i].href );
  }

  // for ( var i = num ; i < links.length ; i++ ) {
  //    crawl( links[i].href );
  // }
  

};

