'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "72143c1c5f5e32fa63c74b9851f30fdc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e8dcf55d62e7a70bf1470a235deb2d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17d77a4283685d1235f6338ef7165906",
".git/logs/refs/heads/main": "e894c2efac6663ff62667ef22d8a84ea",
".git/logs/refs/remotes/origin/main": "4f1c7275a400800f223ca7e47f673e84",
".git/objects/03/aae6b3b50f0607e5b7328c856ca48daa9b2a00": "d50f3b62710ae7961e39873f50b9e347",
".git/objects/09/aed5d08462a430f17e8373c056160d111302df": "d242ac839444dc3949774f8b83b897a0",
".git/objects/0f/b08e66b5d460aa7dd19a775d7795dd3e46b1d4": "b8f779af02c1e38ed5ef986f649fbe09",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/456c5e413afb18e2908d3744d8a820de5dc89b": "84bf74b84c26ebea772e3520d6e580f9",
".git/objects/12/ab38cde5560049d38bbf06866c0c59367f72fd": "120123a3ae427abbd9895a34665a438a",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/31ff9e597947cf590559716c970f9436b7bb64": "dcc90e5d2c64b5c9b23200df87c1a951",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/dd8b8a8bd02d180d9c09e6319beac938c5598d": "ace97b4a99a1f628840bc78f1b02c83a",
".git/objects/32/aaa2e982b5469d481db90b8a5691ebe3567e06": "5535725eabb880e100f3ea2d7f33a059",
".git/objects/34/a4468bea526341cfa8dce2b884372a632772b1": "419b1209be06fd3fb22649716c14f1f6",
".git/objects/37/cf7043da99290b137bc26d77d50454a48fb92f": "a2f7aee2832b7a81a028bfa0501d836e",
".git/objects/3a/4f80b95c7f122bfa30c105bbbdfbea76b6a730": "0367ec4a740602ce5a44a905e5f9af65",
".git/objects/3f/cd8b662a1dc883bab3a665fb068d4358e188ad": "167d1655ef3a7f5199516ead4bd0015d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/d518c7487470c638455c33a35e17da59658228": "5edfec0d050b9b564ff409a5ce8ee547",
".git/objects/54/1068ad537730c0fc826d088d79796d9152195a": "aa5f6af91cb3170785caa44d188e577c",
".git/objects/56/b739263558d3c00140fd58e01f8ac5e97126da": "8fad117c148ab8d32c45c9328258299d",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/70/3a9b719ce1c62fd09d9536a64a5b50057be930": "34d5e78b8a9b996e82d4d372369c420a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/888bffe3fd3c7c35ee339fa19ed5641f001b37": "1613c71c3b84cc1dd7985e4db17f2828",
".git/objects/7a/8c1143f795005a89b481a86f35532aa1b451bd": "c2f9d8bc3028eeea29cf0988baa53f66",
".git/objects/7c/285eb6245a384dde28e7dfdce26bbbe621bf84": "7e2be360b5645e60d8fb97c73a160c81",
".git/objects/7c/5590f8b5e50a32eec118cf7258579dd3f20470": "5895691bc02c28addef1f618d6d4f9cc",
".git/objects/80/49940456ecfb12924207344501526aae5fc1b9": "7fc630178c6cb4ce08c87365f929b43c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a8/c5e6a82e72f0a209fd92114dc15fbd623d84e1": "71759da1ff116d8b47ab3d5ca6726738",
".git/objects/af/a22cd7e9338f84129359c61c8c1e68612b3962": "7d2cf71bb2d0be5a3b9364be4e2650a9",
".git/objects/b1/d7dd7c048346f6d211c817c556431cba71fc2a": "9b01f4d13279f3b5a86a8acc95a12880",
".git/objects/b3/de70b4835b07ad3aa9f38009bf8bc72c005bdf": "cdd560d4571abefe74c460a3052cd5f2",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/73fdb923408e2d62fd1386cf5f2852187240b0": "f735dde3a8b74fd6eb01e04c4fd02c84",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8fc2aeae1ed4a8d0aa786c3e1a324728440d4c": "613e68077f9100c570bbad1ebaf46ae0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/3c9bec8379d517d0bb36cadb1246904e177375": "0ef2d4cb44690c4eddac4740ebf41452",
".git/objects/c7/1c35c0675c532282b746edcab4ab59a30556eb": "bbd22927092343d0076dd813c671a266",
".git/objects/c8/0c57c0171eab88d6d9479b4ec09f98d903a1f2": "0fa628b859b1477c1a7db6f4eae3873d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/23732229e6312a52c022f5e55c47f55ace987f": "8c062976e7a94cb4d728431fc1290da3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/76ca770f36b6ff4099f0daf08eb1c9e62a784a": "2f4bc21923a1d463e18e44e0af1ca4f8",
".git/objects/db/35fc2ae129ec5f6c6f7cf7227e3961c153263c": "69c70c7470d0732752d62f19bc156e57",
".git/objects/e0/054215ba1920778838961bb32ad5cd205e46f5": "84afd85c9bc926bb266a62ffb2b78a59",
".git/objects/e3/26bdb2a389ef4ebfd15702c66e08da24119291": "868046370e9e8659a4614d7352db1945",
".git/objects/e9/0d977fe4c8919492bbf1419cebfb09568bd8f8": "1655af9b4a61215b77e44314d4dd5c52",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/a50a5d8b96abc85d082979efa49c511022976e": "2df840fd9f421a95532e9f7cb195a333",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/581ece7770a0b65e03f86fc1c59fd72f298a5f": "43ede1a26e5cab8574d8ec509b0e35e0",
".git/objects/fc/3b27b7055f12742f3dba302bd6c057ef1ab0fc": "7fd3a6c9a3b24bb563fc9f16baa5d6f1",
".git/refs/heads/main": "1b3af8d093462155e91495f4ceedc0cd",
".git/refs/remotes/origin/main": "1b3af8d093462155e91495f4ceedc0cd",
"assets/AssetManifest.bin": "379b14e7557e65f31684eb2d7f8def4b",
"assets/AssetManifest.bin.json": "bcf2a1fb521d5e498dbe4dc4bc3204e3",
"assets/AssetManifest.json": "7cc28beeb22fcfe1b270deac9d624089",
"assets/assets/images/client-1.png": "b330c1b9d3c710ee4e03b2919f784a55",
"assets/assets/images/client-2.png": "b68f304682f6e3326629440dd5e8fe5a",
"assets/assets/images/client-3.jpg": "355c2c9c3323096389f5ba2300076b54",
"assets/assets/images/client-4.png": "9c67454b773d22b2c7599f550f5a510c",
"assets/assets/images/client-5.jpg": "6dbcd47f63d80548f60452f26ae45113",
"assets/assets/images/list.jpeg": "d8bdb917e92f1ab81200dcca48fce122",
"assets/assets/images/logo.png": "f943422c73d8d57f60ec4c7ce3c1953f",
"assets/assets/images/logotip.png": "3560f8d9837eca63725cd164e6158cf5",
"assets/assets/images/photo.png": "72b707b6509226f3a0ee07981798e04b",
"assets/assets/images/vchd_logo.jpg": "71a1043c82fee6d586d91467c1d6adc3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9e7ff2baf504d719d90a47a3e33d4c77",
"assets/NOTICES": "a6f6b1ce058381fcbe6d03137b5d0532",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e06765f816908c12ad4f80ced814e8d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "692dca00b72d140486efccc8cf6a959e",
"/": "692dca00b72d140486efccc8cf6a959e",
"main.dart.js": "89a4b61873369167f0428d82adb86afe",
"manifest.json": "9d705091c2ee4c400b1a3a6592e3d59e",
"README.md": "3a69f3b95e70ec186300d6ff5bc78ffb",
"version.json": "49da54603abe2daaac6b31612e9267c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
