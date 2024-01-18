// invert document without inverting images

//document.body.style.backgroundColor = "black";
//document.getElementsByTagName('body')[0].style.filter = "invert(1)";
let contentScriptHtmlElement;
let contentScriptImgElement;

for (contentScriptHtmlElement of document.getElementsByTagName("html")) {
  console.log(contentScriptHtmlElement);
  contentScriptHtmlElement.style.filter = "invert(1)";
}

// (contentScriptImgElement of document.getElementsByTagName("body")) {
  //contentScriptImgElement.style.filter = "invert(1)";
//}
