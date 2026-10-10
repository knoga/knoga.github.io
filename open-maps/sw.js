/*
 * Kill-switch for the old Open Maps service worker (ADR 0046).
 *
 * Until 2026-10-10 the app lived at /open-maps/ and registered /open-maps/sw.js with
 * scope /open-maps/. The app now lives at /open-maps/app/ (its own sw.js and scope)
 * and /open-maps/ is the landing page. Browsers that ran the old app keep the old
 * worker, which answers /open-maps/ with the cached old app shell. When such a
 * browser checks that registration for updates, it gets this file instead: it
 * replaces the old worker, deletes the old worker's Workbox caches, unregisters
 * itself and reloads the open tabs, which then load the landing page (or the new
 * app under /open-maps/app/) from the network.
 *
 * It never touches IndexedDB or localStorage (saved places, settings, history), and
 * it has no fetch handler, so it never answers a request. Nothing registers it: the
 * browser fetches it only for the old registration.
 *
 * Can be removed once old installs are unlikely to come back (from about 2027-04);
 * a removed file means a 404 on the update check, i.e. the old worker stays.
 */

// Caches shared by name with the new app worker (vite.config.ts runtimeCaching):
// kept, only the entries the old app stored (URLs outside /open-maps/app/) go.
const SHARED_CACHES = ['om-data-shelters', 'om-data-aed'];

async function cleanCaches() {
  // The registration this worker took over: https://<host>/open-maps/.
  const scope = self.registration.scope;
  const appScope = new URL('app/', scope).href;
  for (const name of await caches.keys()) {
    // Workbox names its caches workbox-<name>-<scope>, so this matches the old
    // precache (workbox-precache-v2-…/open-maps/) and nothing of …/open-maps/app/.
    if (name.startsWith('workbox-') && name.endsWith(`-${scope}`)) {
      await caches.delete(name);
    } else if (SHARED_CACHES.includes(name)) {
      const cache = await caches.open(name);
      for (const request of await cache.keys()) {
        if (!request.url.startsWith(appScope)) await cache.delete(request);
      }
    }
  }
}

self.addEventListener('install', () => {
  void self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // A failed cleanup must not keep the old registration alive.
      await cleanCaches().catch(() => undefined);
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: 'window' });
      await Promise.all(windows.map((client) => client.navigate(client.url).catch(() => null)));
    })(),
  );
});
