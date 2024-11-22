'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0e691d3f8f1f9206dc781badac6b0134",
"index.html": "c6c828d463aba2af2826626c81ef2758",
"/": "c6c828d463aba2af2826626c81ef2758",
"main.dart.js": "1edfa24e4e9ef000adf34993cb0b9565",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83903df981beba0975767de80d73298e",
"assets/AssetManifest.json": "3c497fe3a6bb0bce78a1fc2b0bcb61dc",
"assets/NOTICES": "51cd60a29725d2379bd1ba0eaa090218",
"assets/FontManifest.json": "25b47efda682c39c80e3b9995205ab98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "5ff522a89140dde8878f675ab17f915d",
"assets/fonts/MaterialIcons-Regular.otf": "f5ee5cee7e8f40fa00b2bb5c623e896a",
"assets/assets/images/ic_clipboard_text.png": "d8684351492cf0488af2eae089082033",
"assets/assets/images/dashboard_approval.png": "c4dd984f9ba25dbabadc8b9cd429bac4",
"assets/assets/images/ic_user.png": "6c687f78d875c2f06bd732a62221b84d",
"assets/assets/images/ic_dropdown.png": "274821729cbe84208feb0c4244eada4b",
"assets/assets/images/ic_heart.png": "d8c1298560c890883bfd8f0e88868a7c",
"assets/assets/images/ic_users.png": "c97c07e08f917cd818f2f05f430af78e",
"assets/assets/images/ic_excel.png": "0c4b111bf1435d6734f4f867ad32ff47",
"assets/assets/images/ic_delete.png": "678532538121e1d1c1a2ecee312bea71",
"assets/assets/images/dashboard_document.png": "fb6993d191b116a29fc26b40dfa560be",
"assets/assets/images/ic_clock.png": "cb111ce53a392109a608daa72c3d17e6",
"assets/assets/images/ic_clipboard_close.png": "00c93d616f37c30dfde9bc798aeb3b55",
"assets/assets/images/ic_document.png": "6ff977b8228096a050d42460f5880d25",
"assets/assets/images/dashboard_report.png": "b0dd4f00f29e860e603cf2a5714692c4",
"assets/assets/images/ic_cancel.png": "c7e5e064f4d96d651f81c63506fb311f",
"assets/assets/images/dashboard_more.png": "4b048447889627f5d5fcf9e4f34be2d2",
"assets/assets/images/ic_edit.png": "d9dfb80efa82fbaa488c620874f7a5d5",
"assets/assets/images/ic_not_relevent.png": "081689dd754373c246e2eb1086b62ad2",
"assets/assets/images/ic_chart.png": "5d653e33ffe247f3da44e352d91371b3",
"assets/assets/images/ic_download.png": "306f63e42072892f5d01cec7563ebd52",
"assets/assets/images/dashboard_tender.png": "cd7a97f14332a90233522613f88cf5a5",
"assets/assets/images/ic_clipboard_tick.png": "42dc8cde5952cc0d5b837274609811b0",
"assets/assets/images/splash_logo.png": "e301bb069bc692d5dd22ea403cdbfc38",
"assets/assets/images/ic_tick_circle.png": "b0738600399af14fa56dac1b1dd36fa0",
"assets/assets/json/successLo.json": "dcd24a7d184db980ad3cbb4296840c02",
"assets/assets/json/loading.json": "2b9c1940677f3f3d1e27e3776a931df2",
"assets/assets/json/failedLo.json": "8a911c86650d8ba6965b64a6e841c540",
"assets/assets/fonts/plus/PlusJakartaSans-Light.ttf": "d6fb190614a9297c6263f85094463592",
"assets/assets/fonts/plus/PlusJakartaSans-Medium.ttf": "9fb6d71fc9edf9db455adeb04da9795c",
"assets/assets/fonts/plus/PlusJakartaSans-SemiBold.ttf": "08d59825aa09f741c9272b85e6a1adbf",
"assets/assets/fonts/plus/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/assets/fonts/plus/PlusJakartaSans-Bold.ttf": "7dae244963714ee2b16fcbab46661792",
"assets/assets/fonts/plus/PlusJakartaSans-ExtraLight.ttf": "bd1c3b0ba032000f9e62c171bd0558eb",
"assets/assets/fonts/plus/PlusJakartaSans-ExtraBold.ttf": "9bfdb6bb1fda2806463b64e44c5eaed9",
"assets/assets/fonts/montoton/Monoton-Regular.ttf": "d20753b0996b7092460eef623995f880",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
