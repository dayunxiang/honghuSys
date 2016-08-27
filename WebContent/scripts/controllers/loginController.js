define(['controllers/controllers'
        //'layer'
        ], function (controllers
        		//layer
        		) {
    'use strict';
    controllers.controller('loginController', ['$scope', '$http', '$location', 'userInfoService',
            function ($scope, $http, $location, userInfoService) {

                //$scope.username = $("#username").val();
                //$scope.password = $('#password').val();

                $scope.logintips = "loading..."
                $scope.login = function (logintips, username, password) {
                    if (!username || !password) {
                        $scope.logintips = "failure"
                    } else {
                        userInfoService.getUserInfo({
                            success: function (data) {
                                //$scope.logintips = data;
                                $location.path("/map")
                            },
                            failure: function () {
                                $scope.logintips = data;
                                $scope.logintips = "failure"
                            },
                            error: function () {
                                //
                            }
                        }, username, password);
                    }
                }


            }]);
});
