ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-69.902704, 7.997419, -61.182017, 12.471952]);
var wms_layers = [];

var format_CX_0 = new ol.format.GeoJSON();
var features_CX_0 = format_CX_0.readFeatures(json_CX_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CX_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CX_0.addFeatures(features_CX_0);
var lyr_CX_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CX_0, 
                style: style_CX_0,
                popuplayertitle: 'CX',
                interactive: true,
                title: '<img src="styles/legend/CX_0.png" /> CX'
            });
var format_C5_1 = new ol.format.GeoJSON();
var features_C5_1 = format_C5_1.readFeatures(json_C5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_C5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C5_1.addFeatures(features_C5_1);
var lyr_C5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C5_1, 
                style: style_C5_1,
                popuplayertitle: 'C5',
                interactive: true,
                title: '<img src="styles/legend/C5_1.png" /> C5'
            });
var format_C4_2 = new ol.format.GeoJSON();
var features_C4_2 = format_C4_2.readFeatures(json_C4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_C4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C4_2.addFeatures(features_C4_2);
var lyr_C4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C4_2, 
                style: style_C4_2,
                popuplayertitle: 'C4',
                interactive: true,
                title: '<img src="styles/legend/C4_2.png" /> C4'
            });
var format_C3_3 = new ol.format.GeoJSON();
var features_C3_3 = format_C3_3.readFeatures(json_C3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_C3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C3_3.addFeatures(features_C3_3);
var lyr_C3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C3_3, 
                style: style_C3_3,
                popuplayertitle: 'C3',
                interactive: true,
                title: '<img src="styles/legend/C3_3.png" /> C3'
            });
var format_C2_4 = new ol.format.GeoJSON();
var features_C2_4 = format_C2_4.readFeatures(json_C2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_C2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C2_4.addFeatures(features_C2_4);
var lyr_C2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C2_4, 
                style: style_C2_4,
                popuplayertitle: 'C2',
                interactive: true,
                title: '<img src="styles/legend/C2_4.png" /> C2'
            });
var format_MapadecorrosionDivEstadal_5 = new ol.format.GeoJSON();
var features_MapadecorrosionDivEstadal_5 = format_MapadecorrosionDivEstadal_5.readFeatures(json_MapadecorrosionDivEstadal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MapadecorrosionDivEstadal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadecorrosionDivEstadal_5.addFeatures(features_MapadecorrosionDivEstadal_5);
var lyr_MapadecorrosionDivEstadal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapadecorrosionDivEstadal_5, 
                style: style_MapadecorrosionDivEstadal_5,
                popuplayertitle: 'Mapa de corrosion Div. Estadal',
                interactive: true,
                title: '<img src="styles/legend/MapadecorrosionDivEstadal_5.png" /> Mapa de corrosion Div. Estadal'
            });

lyr_CX_0.setVisible(true);lyr_C5_1.setVisible(true);lyr_C4_2.setVisible(true);lyr_C3_3.setVisible(true);lyr_C2_4.setVisible(true);lyr_MapadecorrosionDivEstadal_5.setVisible(true);
var layersList = [lyr_CX_0,lyr_C5_1,lyr_C4_2,lyr_C3_3,lyr_C2_4,lyr_MapadecorrosionDivEstadal_5];
lyr_CX_0.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel Corrosión': 'Nivel Corrosión', });
lyr_C5_1.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel Corrosión': 'Nivel Corrosión', });
lyr_C4_2.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel Corrosión': 'Nivel Corrosión', });
lyr_C3_3.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel Corrosión': 'Nivel Corrosión', });
lyr_C2_4.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel Corrosión': 'Nivel Corrosión', });
lyr_MapadecorrosionDivEstadal_5.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Pais': 'Pais', 'Nivel_de_corrosion': 'Nivel_de_corrosion', });
lyr_CX_0.set('fieldImages', {'fid': 'TextEdit', 'Nombre Municipio': 'TextEdit', 'Pais': 'TextEdit', 'Estado': 'TextEdit', 'Nivel Corrosión': 'TextEdit', });
lyr_C5_1.set('fieldImages', {'fid': 'TextEdit', 'Nombre Municipio': 'TextEdit', 'Pais': 'TextEdit', 'Estado': 'TextEdit', 'Nivel Corrosión': 'TextEdit', });
lyr_C4_2.set('fieldImages', {'fid': 'TextEdit', 'Nombre Municipio': 'TextEdit', 'Pais': 'TextEdit', 'Estado': 'TextEdit', 'Nivel Corrosión': 'TextEdit', });
lyr_C3_3.set('fieldImages', {'fid': 'TextEdit', 'Nombre Municipio': 'TextEdit', 'Pais': 'TextEdit', 'Estado': 'TextEdit', 'Nivel Corrosión': 'TextEdit', });
lyr_C2_4.set('fieldImages', {'fid': 'TextEdit', 'Nombre Municipio': 'TextEdit', 'Pais': 'TextEdit', 'Estado': 'TextEdit', 'Nivel Corrosión': 'TextEdit', });
lyr_MapadecorrosionDivEstadal_5.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Pais': 'TextEdit', 'Nivel_de_corrosion': 'TextEdit', });
lyr_CX_0.set('fieldLabels', {'fid': 'hidden field', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel Corrosión': 'inline label - visible with data', });
lyr_C5_1.set('fieldLabels', {'fid': 'hidden field', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel Corrosión': 'inline label - visible with data', });
lyr_C4_2.set('fieldLabels', {'fid': 'hidden field', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel Corrosión': 'inline label - visible with data', });
lyr_C3_3.set('fieldLabels', {'fid': 'hidden field', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel Corrosión': 'inline label - visible with data', });
lyr_C2_4.set('fieldLabels', {'fid': 'hidden field', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel Corrosión': 'inline label - visible with data', });
lyr_MapadecorrosionDivEstadal_5.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'header label - always visible', 'Pais': 'hidden field', 'Nivel_de_corrosion': 'hidden field', });
lyr_MapadecorrosionDivEstadal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});