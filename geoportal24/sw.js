importScripts("precache-manifest.c69c9ae73ae0b8cb8b44efe12726e576.js", "workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});
if ('workbox' in self) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}

