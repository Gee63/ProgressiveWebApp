var deferredPrompted;

//check if browser supports service workers
if('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js')
        .then(function(){
            console.log('service worker registered!');
        });
}

window.addEventListener('beforeinstallprompted', function (event) {
    console.log('before install promt fired');
    event.preventDefault();
    deferredPrompted = event;
    return false;
});