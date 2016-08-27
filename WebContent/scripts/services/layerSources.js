

define(['services/services','ol'], function (services,ol) {
    services.factory('layerSources', function () {
        //配置好的数据服务
        var layersource = [
            {
                'date': 'hh1281',
                'layer': new ol.layer.Image({
                    source: new ol.source.ImageWMS({
                        ratio: 1,
                        url: 'http://202.114.148.200:8090/geoserver/cite/wms',
                        params: {
                            LAYERS: 'cite:hh_20120801',
                            STYLES: '',
                        }
                    }),
                })
            },
            {
                'date': 'hh12121',
                'layer': new ol.layer.Image({
                    source: new ol.source.ImageWMS({
                        ratio: 1,
                        url: 'http://202.114.148.200:8090/geoserver/cite/wms',
                        params: {
                            LAYERS: 'cite:hh_20121201',
                            STYLES: '',
                        }
                    }),
                })
            },
            {
                'date': 'hh1341',
                'layer': new ol.layer.Image({
                    source: new ol.source.ImageWMS({
                        ratio: 1,
                        url: 'http://202.114.148.200:8090/geoserver/cite/wms',
                        params: {
                            LAYERS: 'cite:hh_20130401',
                            STYLES: '',
                        }
                    })
                })
            },
            {
                'date': 'honghu',
                'layer': new ol.layer.Image({
                    source: new ol.source.ImageWMS({
                        ratio: 1,
                        url: 'http://202.114.148.200:8090/geoserver/cite/wms',
                        params: {
                            LAYERS: 'cite:honghu',
                            STYLES: '',
                        }
                    })
                })
            },
            {
                'date': 'honghu2',
                'layer': new ol.layer.Image({
                    source: new ol.source.ImageWMS({
                        ratio: 1,
                        url: 'http://202.114.148.200:8090/geoserver/cite/wms',
                        params: {
                            LAYERS: 'cite:honghu2',
                            STYLES: '',
                        }
                    })
                })
            }
        ];

        return {
            layersource:layersource,
        }
    })
})