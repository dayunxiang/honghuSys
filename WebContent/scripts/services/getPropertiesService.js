define(['services/services'], function (services) {
    services.factory('getPropertiesService', function ($http) {
        return {
            getProperties: function (sourceUrl) { 
                $http.jsonp(sourceUrl).success(function (data) {
                    console.log('service data:' + data);
                }).error(function () {
                    console.log('error');
                })
            }
        }
    })
})