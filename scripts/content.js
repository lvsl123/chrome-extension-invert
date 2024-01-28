/* - 
 * File: chrome-extension-invert-main/scripts/content.js 
 */
(function() {

  let contentScriptHtmlElement;
  let contentScriptImgElement;

  for (contentScriptHtmlElement of document.getElementsByTagName("html")) {
    //console.log(contentScriptHtmlElement);
    contentScriptHtmlElement.style.filter = "invert(1)";
  }

  // ---- uninvert inverted images and video ----

  let allItemsRaw = [...document.querySelectorAll("img"), ...document.querySelectorAll("img *")];
  let allItems = [];
  let imageCounter = 0;
  while (allItemsRaw.length > 0) {
    console.log("Image counter", ++imageCounter);

    let position = allItemsRaw.length - 1;
    
    let allItemsRawIncludes = allItemsRaw.includes(allItemsRaw[position]);
    let allItemsIncludes = allItems.includes(allItemsRaw[position]);
    if (allItemsRawIncludes && !allItemsIncludes) {
      allItems.push(allItemsRaw.pop());
    } else {
      allItemsRaw.pop();
    } 

    //if (imageCounter > 500) {
    //  console.log("image counter = 500");
    //  break;
    //}
  }
  console.log(allItems);

  for (let img of allItems) {
    console.log("image to filter");
    img.style.filter = "invert(1)";
  }

  let allVideosRaw = [...document.querySelectorAll("video *"), ...document.querySelectorAll("video")];
  let allVideos = [];
  let videoCounter = 0;
  for (let video of allVideosRaw) {
    console.log("Video counter", ++videoCounter);
    if (allVideosRaw.includes(video) && !allVideos.includes(video)) {
      allVideos.push(video);
    }
  }
  for (let video of allVideos) {
    video.style.filter = "invert(1)";
  }

  for (let div of document.querySelectorAll("div")) {
    div.style.backgroundImage.filter = "invert(1)";
  }

})();
