//chrome.webNavigation.onCompleted((tab) => {
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/content.js"]
  });
});
