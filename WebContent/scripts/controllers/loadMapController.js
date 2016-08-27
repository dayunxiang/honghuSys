define(['controllers/controllers', 'jquery', 'ol', 'highcharts', 'angular-animate', 'UIBootstrap'],
    function (controllers, $, ol, hc, agan, UIBootstrap) {
        'use strict';
        controllers.controller('loadMapController', ['$scope', 'layerSources','getPropertiesService',
            function ($scope, layerSources, getPropertiesService) {
                //获取发布好的地图 服务
                var layers = layerSources.layersource;

                var map;
                var baseLayer = [
                    //地理底图
                     new ol.layer.Tile({
                         source: new ol.source.OSM()
                     }),
                ];
                //进入界面先加载底图服务
                $(document).ready(function () {
                    map = new ol.Map({
                        controls: ol.control.defaults().extend([
                            new ol.control.FullScreen(),
                            new ol.control.OverviewMap()
                            //zoom
                        ]),
                        interactions: ol.interaction.defaults().extend([
                            new ol.interaction.DragRotateAndZoom()
                        ]),
                        layers: baseLayer,
                        target: 'map',
                        view: new ol.View({
                            projection: 'EPSG:4326',
                            center: [113.35, 29.85],
                            zoom: 11
                        })

                    });
                    //map获取点数据属性,单击
                    map.on('singleclick', function (evt) {
                        document.getElementById('info').innerHTML = '';
                        var viewResolution = (map.getView().getResolution());
                        var pointLayer1 = layerSources.layersource[0].layer.getSource();
                        var url = pointLayer1.getGetFeatureInfoUrl(
                            evt.coordinate, viewResolution, 'EPSG:4326',
                            { 'INFO_FORMAT': 'application/json' });
                        if (url) {
                            url += '&jsonp=?';
                            $.getJSON(url, function (data) {
                                console.log('data:' + data);
                            })
                        }
                    });
                    

                });

                //修改按钮的样式
                function ChangeShowStyle(showTag) {
                    var styleTag = showTag ? {   //选择窗可见时，按钮为按下的样式
                        'background-color': '#e6e6e6',
                        'border-color': '#adadad'
                    } : {                   //选择窗不可见时，a按钮为弹起的样式
                        'background-color': '#fff',
                        'border-color': '#ccc'
                    };
                    return styleTag;
                }

                //卷帘刷新按钮
                $scope.swipeDataShow = false;
                $scope.enableCurtain = function () {
                    //关闭观测点弹窗
                    if ($scope.surveySelShow) {
                        $scope.surveySelShow = false;
                        $scope.surveyBtnStyle = ChangeShowStyle($scope.surveySelShow);
                    }
                    $scope.swipeDataShow = !$scope.swipeDataShow;
                    $scope.curtainBtnStyle = ChangeShowStyle($scope.swipeDataShow);
                };

                $scope.dataList = [
                    { 'isChecked': false, 'name': '2012年8月1日' },
                    { 'isChecked': false, 'name': '2012年12月1日' }];

                //选择好数据点击确定后显示Swipe窗口,默认为不可见
                $scope.swipeMapShow = false;
                $scope.swipeDataok = function () {
                    if ($scope.dataList[0].isChecked && $scope.dataList[1].isChecked) {
                        //如果swipeMapShow已经显示了，应给出提示窗
                        if ($scope.swipeMapShow) {
                            alert('当前选择的数据卷帘已存在');
                        }
                         //如果swipeMapShow没有显示
                        else {
                            $scope.swipeMapShow = true;
                            $scope.swipeDatacancel();
                            //添加选择的图层...
                            //只添加一个图层其实也可以做卷帘
                            var swipeLayer1 = layerSources.layersource[3].layer;
                            var swipeLayer2 = layerSources.layersource[4].layer;
                            map.addLayer(swipeLayer1);
                            map.addLayer(swipeLayer2);

                            var swipe = document.getElementById('swipe');

                            swipeLayer2.on('precompose', function (event) {
                                var ctx = event.context;
                                var width = ctx.canvas.width * (swipe.value / 100);
                                ctx.save();
                                ctx.beginPath();
                                ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
                                ctx.clip();

                            });

                            swipeLayer2.on('postcompose', function (event) {
                                var ctx = event.context;
                                ctx.restore();
                            });

                            //input事件，当swipe控件值发生改变时引发
                            swipe.addEventListener('input', function () {
                                map.render();
                            }, false);
                        }
                    }
                    else {
                        alert('请至少选择两个数据！');
                    }
                };

                //取消按钮
                $scope.swipeDatacancel = function () {
                    $scope.swipeDataShow = false;
                    $scope.curtainBtnStyle = {
                        'background-color': '#fff',
                        'border-color': '#ccc'
                    };
                };

                //关闭swipeMap窗口,移除添加的图层
                $scope.closeSwipeMap = function () {
                    $scope.swipeMapShow = false;
                    map.removeLayer(layerSources.layersource[3].layer);
                    map.removeLayer(layerSources.layersource[4].layer);
                };


                //观测点按钮事件
                //选择框初始状态下为不可见
                $scope.surveySelShow = false;
                $scope.DivCollapsed = function () {
                    //关闭卷帘
                    if ($scope.swipeDataShow) {
                        $scope.swipeDataShow = false;
                        $scope.curtainBtnStyle = ChangeShowStyle($scope.swipeDataShow);
                    }
                    $scope.surveySelShow = !$scope.surveySelShow;
                    $scope.surveyBtnStyle = ChangeShowStyle($scope.surveySelShow);
                }

                $scope.layerList = [
                    { 'isChecked': false, 'name': '2012年8月1日' },
                    { 'isChecked': false, 'name': '2012年12月1日' },
                    { 'isChecked': false, 'name': '2013年4月1日' }];
                //当checkbox状态发生改变时进行响应
                $scope.data1ChangFun = function (index) {
                    if ($scope.layerList[index].isChecked) {
                        map.addLayer(layerSources.layersource[index].layer);
                        map.renderSync();
                    } else {
                        map.removeLayer(layerSources.layersource[index].layer);
                        map.renderSync();
                    }
                };


                $scope.displayCharts = function () {

                };
            }]);
    });
