const url = 'https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?export=download&id=0BwngjV5rTrU-UzhSY2Y5aThHTThuT0ZpSmpiMEpDX2tsb0Nr';


function getData(){
fetch(url)
  .then((resp) => resp.text())
  .then(function(data) {
    console.log(data);

    var oParser = new DOMParser();
    var oDOM = oParser.parseFromString(data, "application/xml");
    // print the name of the root element or error message
    console.log(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
  
    var iterator = document.evaluate("//body/outline/@text", oDOM.documentElement, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    try {
      var thisNode = iterator.iterateNext();
      
      while (thisNode) {
        console.log( thisNode.textContent );
        thisNode = iterator.iterateNext();
      }	
    }
    catch (e) {
      alert( 'Error: Document tree modified during iteration ' + e );
    }

  
  
  
  
    //var nodes = xpath.select("//body/outline/@text", oDOM.documentElement);
    //nodes.forEach(function(nextElm){
        //var textVal = nextElm.getText();
    //    console.log(nextElm);
    //});

    /*return authors.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
	*/
  })
  .catch(function(error) {
    console.log(error);
  });   
};


