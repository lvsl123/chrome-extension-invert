/* - 
 * File: chrome-extension-invert-main/scripts/content.js 
 */



let contentScriptHtmlElement;
let contentScriptImgElement;

for (contentScriptHtmlElement of document.getElementsByTagName("html")) {
  console.log(contentScriptHtmlElement);
  contentScriptHtmlElement.style.filter = "invert(1)";
}

//uninvert inverted images and video
for (let img of document.querySelectorAll("img")) {
  img.style.filter = "invert(1)"
}
for (let video of document.querySelectorAll("video")) {
  video.style.filter = "invert(1)"
}

for (let div of document.querySelectorAll("div")) {
div.style.backgroundImage.filter = "invert(1)";
}
