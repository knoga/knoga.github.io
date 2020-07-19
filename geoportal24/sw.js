importScripts("precache-manifest.4f0200b3074d89a92fca66f9b2d0b190.js", "workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});
if ('workbox' in self) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}

