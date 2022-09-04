/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4536ae7b2b22c1dfaf5b0cad502c2c0b"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.247e7b66.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.e5554f2d.js",
    "revision": "d2993fc9923278e52739f9b696cc9cef"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.97f9ea03.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.21aa3bfc.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.23b49cc6.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.91c6d110.js",
    "revision": "b0fba69dd0f86828f024247e564b08bd"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "fd6569598805388194be5f6f324acb45"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b24c7b4fc300d0e41546e285a866ea53"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b287912cc085882d4bc049223d5e9b38"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1f85c6a1ea5d8e7f9902559b0abbed2e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ca2fc72b839df23dbd91e0dd642d2280"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "9c4728ea4b7cd544f21b7e100f52a8e5"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "331702e5e638043012e408f1dbb2745a"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "3ecfcd4c5445f3940b796017ef85ecfc"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "17240fb4b0f950531ae790c70456a58b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8746b70c46c25dcef58c74c5d18d59d8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "aad43f71eafef7b1ad41077e5ce95f6d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a7449a4a7dba27a5989e5ef0f11affb3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "631601a9560eee364d7daf6e00ff6893"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5f7f67f2af91a2dbd04c844f3b3af0b8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d034089047a64f1fbb88fde0615dc695"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4337a460f206999c4b57ea0a02ed01fb"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1d7116dc4a0062fc39023e35ae1ab6ab"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b62b856e46f7ea669c95a5b2fadbf169"
  },
  {
    "url": "timeline/index.html",
    "revision": "78df7317965e66980c7c6256f0006ffa"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1c6c04c3138cea94527ce172a2d39d7d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "abbc9963b0a8bf796534cd99185e943e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "fe09b99f502c3a24c015e6cb9d45024c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3b0f1e1272e606e790ec06d1e5e12c91"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7f99b66cefd429dc89d9961d8602cb52"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
