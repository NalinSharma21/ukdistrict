ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([76.619919, 28.631305, 82.063797, 31.525382]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_uttarakhand_districts_1 = new ol.format.GeoJSON();
var features_uttarakhand_districts_1 = format_uttarakhand_districts_1.readFeatures(json_uttarakhand_districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_uttarakhand_districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uttarakhand_districts_1.addFeatures(features_uttarakhand_districts_1);
var lyr_uttarakhand_districts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uttarakhand_districts_1, 
                style: style_uttarakhand_districts_1,
                interactive: true,
    title: 'uttarakhand_districts<br />\
    <img src="styles/legend/uttarakhand_districts_1_0.png" /> Almora<br />\
    <img src="styles/legend/uttarakhand_districts_1_1.png" /> Bageshwar<br />\
    <img src="styles/legend/uttarakhand_districts_1_2.png" /> Chamoli<br />\
    <img src="styles/legend/uttarakhand_districts_1_3.png" /> Champawat<br />\
    <img src="styles/legend/uttarakhand_districts_1_4.png" /> Dehradun<br />\
    <img src="styles/legend/uttarakhand_districts_1_5.png" /> Haridwar<br />\
    <img src="styles/legend/uttarakhand_districts_1_6.png" /> Nainital<br />\
    <img src="styles/legend/uttarakhand_districts_1_7.png" /> Pauri Garhwal<br />\
    <img src="styles/legend/uttarakhand_districts_1_8.png" /> Pithoragarh<br />\
    <img src="styles/legend/uttarakhand_districts_1_9.png" /> Rudraprayag<br />\
    <img src="styles/legend/uttarakhand_districts_1_10.png" /> Tehri Garhwal<br />\
    <img src="styles/legend/uttarakhand_districts_1_11.png" /> Udham Singh Nagar<br />\
    <img src="styles/legend/uttarakhand_districts_1_12.png" /> Uttarkashi<br />\
    <img src="styles/legend/uttarakhand_districts_1_13.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_uttarakhand_districts_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_uttarakhand_districts_1];
lyr_uttarakhand_districts_1.set('fieldAliases', {'district': 'district', 'SCP': 'SCP', 'IPR': 'IPR', 'R&D': 'R&D', 'EDP': 'EDP', 'STEM': 'STEM', 'Historic': 'Historic', });
lyr_uttarakhand_districts_1.set('fieldImages', {'district': 'TextEdit', 'SCP': 'TextEdit', 'IPR': 'TextEdit', 'R&D': 'TextEdit', 'EDP': 'TextEdit', 'STEM': 'TextEdit', 'Historic': 'TextEdit', });
lyr_uttarakhand_districts_1.set('fieldLabels', {'district': 'no label', 'SCP': 'no label', 'IPR': 'no label', 'R&D': 'no label', 'EDP': 'no label', 'STEM': 'no label', 'Historic': 'no label', });
lyr_uttarakhand_districts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'darken';
});