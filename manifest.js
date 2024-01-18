{
  "manifest_version": 3,
  "name": "Reading time",
  "version": "1.0",
  "description": "Add the reading time to Chrome Extension documentation articles",

  "icons": {
    "16": "images/icon.png",
    "32": "images/icon.png",
    "48": "images/icon.png",
    "128": "images/icon.png"
  },

  "permissions": [
    "activeTab",
    "scripting"
  ],
  "background": {
    "service_worker": "service-worker.js"
  },
  "action": {
    "default_title": "Action Button"
  }

}
