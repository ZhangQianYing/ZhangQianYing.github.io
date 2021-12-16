/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/博客/hexo-blog-warehouse/public/2020/05/22/2020-8-25/index.html","c630f374e130cfb0ab83d3aad9bf4f8c"],["D:/博客/hexo-blog-warehouse/public/2020/05/22/es6/index.html","a5aa66bfdc9da50aa49743e08816919a"],["D:/博客/hexo-blog-warehouse/public/2020/05/22/git/index.html","c4ac61787fd1f786aa851b75b2f01509"],["D:/博客/hexo-blog-warehouse/public/2020/05/22/前端方法/index.html","218f937055ae7d4a320903172761326b"],["D:/博客/hexo-blog-warehouse/public/2020/05/22/工具方法/index.html","0c37d278521a6963ad183cff6a43a5b5"],["D:/博客/hexo-blog-warehouse/public/404.html","f148f3ba12a00862c3afdf4f3bc296f7"],["D:/博客/hexo-blog-warehouse/public/about/index.html","a753c373f2509f54c3f4de7437fcb50b"],["D:/博客/hexo-blog-warehouse/public/archives/2020/05/index.html","11f0c7f4316e541567c8fde656212faa"],["D:/博客/hexo-blog-warehouse/public/archives/2020/index.html","9cf5527b1914cc4b54d70a1e1da3ed40"],["D:/博客/hexo-blog-warehouse/public/archives/index.html","c16acb3001b82738a5454bdb6a79227d"],["D:/博客/hexo-blog-warehouse/public/categories/css/index.html","b88f16dddf4a4460b024f81bdb617fcc"],["D:/博客/hexo-blog-warehouse/public/categories/git/index.html","06413fc7f49b5f308b92152881fbab5d"],["D:/博客/hexo-blog-warehouse/public/categories/index.html","2e45093ef7ab167d677d2e48f2d94083"],["D:/博客/hexo-blog-warehouse/public/categories/js/es6/index.html","98010aae98f622e2eea98ebf1f3a8991"],["D:/博客/hexo-blog-warehouse/public/categories/js/index.html","8b3d9688f95a222b240e11751b53b13f"],["D:/博客/hexo-blog-warehouse/public/categories/前端/css/index.html","cbc7871a2600e7a05c9796e144907120"],["D:/博客/hexo-blog-warehouse/public/categories/前端/index.html","a8b6bab3818e30ab0331aebc9ae0b285"],["D:/博客/hexo-blog-warehouse/public/categories/工具方法/index.html","e68ec67896714b1690a155d568bc72d8"],["D:/博客/hexo-blog-warehouse/public/categories/工具方法/js/index.html","a364289468e728e69b1ed4d9a831637e"],["D:/博客/hexo-blog-warehouse/public/css/style.css","ec17fc5c0128d5d3613b43365ef076b7"],["D:/博客/hexo-blog-warehouse/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/博客/hexo-blog-warehouse/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/博客/hexo-blog-warehouse/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/博客/hexo-blog-warehouse/public/friends/index.html","ee18b9202d9a84d3165e80ddf592f9c8"],["D:/博客/hexo-blog-warehouse/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/博客/hexo-blog-warehouse/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/博客/hexo-blog-warehouse/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/博客/hexo-blog-warehouse/public/index.html","ee14a8de0de96747bffccabf993e55fa"],["D:/博客/hexo-blog-warehouse/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/博客/hexo-blog-warehouse/public/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["D:/博客/hexo-blog-warehouse/public/js/botui.js","59f19d1fa563670e243523a2ddbcbb8d"],["D:/博客/hexo-blog-warehouse/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["D:/博客/hexo-blog-warehouse/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/博客/hexo-blog-warehouse/public/message/index.html","26f56b861a30273d832e4972dfced9f1"],["D:/博客/hexo-blog-warehouse/public/mylist/index.html","4749f7fe0e8daa01e3e0073c13687a40"],["D:/博客/hexo-blog-warehouse/public/photo/index.html","f8a72d1f5a762dfa58de057c7b339cc2"],["D:/博客/hexo-blog-warehouse/public/tags/JavaScript/index.html","bc2143481767ef5b6431bd8a26bd6b80"],["D:/博客/hexo-blog-warehouse/public/tags/css/index.html","01c0731cdc01b81ecee7bd3bebd2a461"],["D:/博客/hexo-blog-warehouse/public/tags/es6/index.html","bd3b95fd086caec7f0609946f2d0d1d5"],["D:/博客/hexo-blog-warehouse/public/tags/git/index.html","079843c8f050f2457e57ac050b1d789c"],["D:/博客/hexo-blog-warehouse/public/tags/index.html","b12486250ecbd1570a32cb9dff2a0c04"],["D:/博客/hexo-blog-warehouse/public/tags/js/index.html","06b917689423570143e88a0dfcaacab1"],["D:/博客/hexo-blog-warehouse/public/tags/前端/index.html","9d99a07def62a5efee386d3dc0e9033d"],["D:/博客/hexo-blog-warehouse/public/tags/开发技巧/index.html","4c1b63ddf49402e254899ae3117e890f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







