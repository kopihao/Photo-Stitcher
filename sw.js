const CACHE_NAME='photo-stitcher-v1.0.3';
const STATIC_FILES=['manifest.json','icon-192.png','icon-512.png'];
const HTML_FILES=['index.html','photo-stitcher.html','save.html'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll([...STATIC_FILES,...HTML_FILES])).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  const isHTML=HTML_FILES.some(f=>url.pathname.endsWith(f))||e.request.mode==='navigate';

  if(isHTML){
    e.respondWith(
      fetch(e.request).then(response=>{
        if(response&&response.status===200){
          const clone=response.clone();
          caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));
        }
        return response;
      }).catch(()=>caches.match(e.request))
    );
  }else{
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
  }
});
