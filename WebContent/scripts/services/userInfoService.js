define(['services/services'], function (services) {
    //
    services.factory('userInfoService',
        function ($http) {
        var baseUrl = "http://202.114.148.200:8080/honghu/LoginServlet?";

        return {
            getUserInfo: function (callback,username, password) {
                //var userurl = baseUrl + "username=" + username + "&password=" + password;
                var userurl = baseUrl + "username=" + username ;
                $http.get(userurl).success(function (data) {
                    //console.log(data);
                    callback.success(data);
                }).error(function () {
                    callback.failure(data);
                });
            }
        }

    })
})