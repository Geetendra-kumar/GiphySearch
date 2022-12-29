/* 1. Grab the input value */


 document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  pushToDOM(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;

  // if the key ENTER is pressed...
  if(e.which === 13) {
    searchGiphy(input);
  }

});

/* 2. do the data stuff with the API */
function searchGiphy(item) {

var url = "https://api.giphy.com/v1/gifs/search?api_key=KuXW14kxx3q8mLk7ojvENTsrHmdAXKWr&q="+item;

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  pushToDOM(data);

});
}



/* 3. Show me the GIFs */


function pushToDOM(input) {

  var response = JSON.parse(input);
  var container = document.querySelector(".js-container");
clear(container);

  var imageURLs = response.data;
  
  imageURLs.forEach(function(e){
      
    var src = e.images.fixed_height.url;
    

  
  container.innerHTML +="<img src=\""+ src +"\" class=\"container-image\">";

})
function clear(item){
  item.innerHTML="";
}

}