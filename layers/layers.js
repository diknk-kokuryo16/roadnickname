var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright/ja">OpenStreetMap</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': '地理院地図',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__20241104_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "道路愛称",
                interactive: true,
    title: '道路愛称<br />\
    <img src="styles/legend/_2_0.png" /> 都道府県<br />\
    <img src="styles/legend/_2_1.png" /> 市区町村<br />\
    <img src="styles/legend/_2_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(false);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__2];
lyr__2.set('fieldAliases', {'id': 'id', '道路名': '道路名', '区分': '区分', });
lyr__2.set('fieldImages', {'id': 'TextEdit', '道路名': 'TextEdit', '区分': 'TextEdit', });
lyr__2.set('fieldLabels', {'id': 'inline label - always visible', '道路名': 'inline label - always visible', '区分': 'inline label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
