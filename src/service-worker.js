self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/split/', // 시작 URL을 서브 디렉토리에 맞게 수정
                '/split/index.html',
                '/split/styles.css',
                '/split/app.js',
                '/split/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
