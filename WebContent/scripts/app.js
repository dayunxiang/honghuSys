define([
    'angular',
    'angular-route',
    'jquery',
    'highcharts',
    'ol',
    //'layer',
    'table',
    'UIBootstrap',
    'angular-animate',
    //'easyui',

    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';

    var app = angular.module('app', ['controllers', 'directives', 'filters', 'services', 'ngRoute']);

    return {
        app:app,
    }

});
