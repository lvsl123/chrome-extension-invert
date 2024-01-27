/* - 
 * File: chrome-extension-invert-main/scripts/content.js 
 */

(function() {
  let contentScriptHtmlElement;
  let contentScriptImgElement;

  for (contentScriptHtmlElement of document.getElementsByTagName("html")) {
    console.log(contentScriptHtmlElement);
    contentScriptHtmlElement.style.filter = "invert(1)";
  }
})();

// ---- uninvert inverted images and video ----


(function() {
  let allItemsRaw = [...document.getElementsByTagName("img"), ...document.querySelectorAll("img[*]")];
  let allItems = [];
  for (let img of allItemsRaw) {
    // note: it's not always true 
    if (allItemsRaw.includes(img) && !allItems.include(img)) {
      allItems.push(img);
    }
  }

  for (let img of allItems) {
    img.style.filter = "invert(1)";
  }
})();

(function() {
  for (let video of document.querySelectorAll("video")) {
    video.style.filter = "invert(1)"
  }
  
  for (let div of document.querySelectorAll("div")) {
  div.style.backgroundImage.filter = "invert(1)";
  }
})();
