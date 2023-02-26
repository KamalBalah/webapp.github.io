'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8c4f27005af5e84f74da0bb905c0a76f",
"assets/assets/fonts/Changa-Bold.ttf": "824663a52d6a4f91fa2f4fc1487ac812",
"assets/assets/fonts/Changa-ExtraBold.ttf": "fe3ab0058cac681697ea705cce7365de",
"assets/assets/fonts/Changa-ExtraLight.ttf": "62a242e9a75a94765b2d14a63e05b6a6",
"assets/assets/fonts/Changa-Light.ttf": "50d36c726372eebdd4f3547a2a962256",
"assets/assets/fonts/Changa-Medium.ttf": "c691e009750d3670053eaa622c23525f",
"assets/assets/fonts/Changa-Regular.ttf": "a3bd1c455839c659335ff3d69774a2e1",
"assets/assets/fonts/Changa-SemiBold.ttf": "2509f10cf2fc6e115c01bf8b4bd19b83",
"assets/assets/fonts/fproar_semibold.ttf": "6c16d055daa4f86f1c4ac85c7d7b631c",
"assets/assets/fonts/sf_arabic_font.ttf": "cee165aac035ec21815b0bc416547ab1",
"assets/assets/icons/animate_logo.gif": "6bbe146f0cc4dfcd9e258135b4df1f2b",
"assets/assets/icons/apartment.png": "49d3c53ec152b49d4db7775702718d30",
"assets/assets/icons/dish.png": "5dba6ac2fe463b3de608c7a02a87f676",
"assets/assets/icons/facebook.svg": "b29cb7c8a55c1d2d741fac4b50177d9c",
"assets/assets/icons/instagram.svg": "25d1392d236b819bd35f1907f5c3e2da",
"assets/assets/icons/iphone_x.svg": "474dd793ee13d08b826d8a74e53e3c63",
"assets/assets/icons/location.png": "9a7659b6765bc061ff2ee5f53305fa25",
"assets/assets/icons/twitter.svg": "1c12bf3436c3fdb2f8215dcef4b56768",
"assets/assets/icons/website.svg": "d0b1432dc1bfd3c5c4cae0855d3ec7df",
"assets/assets/icons/whatsapp.svg": "ed7619819869e61b4a33ce7a390435de",
"assets/assets/images/1.jpg": "f4e2739f8a894bd554e62dcd291794ac",
"assets/assets/images/10.jpg": "860826e0af54a5e07987079185340708",
"assets/assets/images/2.jpg": "4443ed0a7cb9a97baaf9bf641e410ace",
"assets/assets/images/3.jpg": "cd5ebc002b8b48051dd5c2a2184619f4",
"assets/assets/images/4.jpg": "a9b7fa8e94931f65840abf24e18c2447",
"assets/assets/images/5.jpg": "15dcea06a576abaf4bbf1c07dcb07c1d",
"assets/assets/images/6.jpg": "12ce7fd8c35c7055826b15b2e251a3b5",
"assets/assets/images/7.jpg": "81758ee34858fdbaa4866eb16d088121",
"assets/assets/images/8.jpg": "27a5ceec63f97bb3992a014180abb93a",
"assets/assets/images/9.jpg": "1f73f31fca1636eb9e1ef58ec5804317",
"assets/assets/images/app_logo.png": "d7894e95a604d2974eb0bb74d656a51f",
"assets/FontManifest.json": "5c27d87e0a28db657e0fbe8758f8ef8b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "65a26e57c4d3121daffca187923e4903",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0206cbfb332576f87c78fa04baf6df31",
"/": "0206cbfb332576f87c78fa04baf6df31",
"main.dart.js": "b99afe36f4f064771ab151c10880e575",
"manifest.json": "3126869138d5f75202b7755677f6e939",
"version.json": "ca7efe331af6d0d41f5dd256bf1cf7df"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
