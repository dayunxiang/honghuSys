define(['services/services'], function (services) {
    //
    services.factory('excelLoadService',
        function ($http) {
        var baseUrl = "http://202.114.148.200:8080/honghu/Load1281Data";

        return {
            getExcelData: function (callback) {
                //http请求地址
                var excelurl = baseUrl;
                //
                $http.get(excelurl).success(function (data) {
                    //console.log(data);
                    callback.success(data);
                }).error(function () {
                    callback.failure(data);
                })
            }
        }

    });
})