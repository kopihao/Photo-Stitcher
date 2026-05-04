const CACHE_NAME='photo-stitcher-v1.0.2';
const FILES=['index.html','photo-stitcher.html','save.html','manifest.json','icon-192.png','icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached)return cached;
      return fetch(e.request).then(response=>{
        if(response&&response.status===200){
          const clone=response.clone();
          caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));
        }
        return response;
      });
    })
  );
});
