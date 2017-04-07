import angular from 'angular';

function ifurl(url, callback) {
    angular.element(document).ready(function(){
        if (location.href.includes(url)) {
            (callback)();
            setTimeout(() => {
                angular.bootstrap(document, ['app']);
            },0);
        }
    });
}

export {ifurl};