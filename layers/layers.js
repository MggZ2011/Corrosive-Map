ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-75.252802, -1.015543, -45.407664, 14.760549]);
var wms_layers = [];

var format_FalcnEstadoFalcn_0 = new ol.format.GeoJSON();
var features_FalcnEstadoFalcn_0 = format_FalcnEstadoFalcn_0.readFeatures(json_FalcnEstadoFalcn_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FalcnEstadoFalcn_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FalcnEstadoFalcn_0.addFeatures(features_FalcnEstadoFalcn_0);
var lyr_FalcnEstadoFalcn_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FalcnEstadoFalcn_0, 
                style: style_FalcnEstadoFalcn_0,
                popuplayertitle: 'Falcón — Estado Falcón',
                interactive: true,
    title: 'Falcón — Estado Falcón<br />\
    <img src="styles/legend/FalcnEstadoFalcn_0_0.png" /> C2<br />\
    <img src="styles/legend/FalcnEstadoFalcn_0_1.png" /> C3<br />\
    <img src="styles/legend/FalcnEstadoFalcn_0_2.png" /> C4<br />\
    <img src="styles/legend/FalcnEstadoFalcn_0_3.png" /> C5<br />\
    <img src="styles/legend/FalcnEstadoFalcn_0_4.png" /> CX<br />\
    <img src="styles/legend/FalcnEstadoFalcn_0_5.png" /> <br />' });
var format_ZuliaEstadoZulia_1 = new ol.format.GeoJSON();
var features_ZuliaEstadoZulia_1 = format_ZuliaEstadoZulia_1.readFeatures(json_ZuliaEstadoZulia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZuliaEstadoZulia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZuliaEstadoZulia_1.addFeatures(features_ZuliaEstadoZulia_1);
var lyr_ZuliaEstadoZulia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZuliaEstadoZulia_1, 
                style: style_ZuliaEstadoZulia_1,
                popuplayertitle: 'Zulia — Estado Zulia',
                interactive: true,
    title: 'Zulia — Estado Zulia<br />\
    <img src="styles/legend/ZuliaEstadoZulia_1_0.png" /> C2<br />\
    <img src="styles/legend/ZuliaEstadoZulia_1_1.png" /> C3<br />\
    <img src="styles/legend/ZuliaEstadoZulia_1_2.png" /> C4<br />\
    <img src="styles/legend/ZuliaEstadoZulia_1_3.png" /> C5<br />\
    <img src="styles/legend/ZuliaEstadoZulia_1_4.png" /> CX<br />\
    <img src="styles/legend/ZuliaEstadoZulia_1_5.png" /> <br />' });
var format_TchiraEstadoTchira_2 = new ol.format.GeoJSON();
var features_TchiraEstadoTchira_2 = format_TchiraEstadoTchira_2.readFeatures(json_TchiraEstadoTchira_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TchiraEstadoTchira_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TchiraEstadoTchira_2.addFeatures(features_TchiraEstadoTchira_2);
var lyr_TchiraEstadoTchira_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TchiraEstadoTchira_2, 
                style: style_TchiraEstadoTchira_2,
                popuplayertitle: 'Táchira — Estado Táchira',
                interactive: true,
    title: 'Táchira — Estado Táchira<br />\
    <img src="styles/legend/TchiraEstadoTchira_2_0.png" /> C2<br />\
    <img src="styles/legend/TchiraEstadoTchira_2_1.png" /> C3<br />\
    <img src="styles/legend/TchiraEstadoTchira_2_2.png" /> C4<br />\
    <img src="styles/legend/TchiraEstadoTchira_2_3.png" /> C5<br />\
    <img src="styles/legend/TchiraEstadoTchira_2_4.png" /> CX<br />\
    <img src="styles/legend/TchiraEstadoTchira_2_5.png" /> <br />' });
var format_MrdiaEstadoMrida_3 = new ol.format.GeoJSON();
var features_MrdiaEstadoMrida_3 = format_MrdiaEstadoMrida_3.readFeatures(json_MrdiaEstadoMrida_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MrdiaEstadoMrida_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MrdiaEstadoMrida_3.addFeatures(features_MrdiaEstadoMrida_3);
var lyr_MrdiaEstadoMrida_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MrdiaEstadoMrida_3, 
                style: style_MrdiaEstadoMrida_3,
                popuplayertitle: 'Mérdia — Estado Mérida',
                interactive: true,
    title: 'Mérdia — Estado Mérida<br />\
    <img src="styles/legend/MrdiaEstadoMrida_3_0.png" /> C2<br />\
    <img src="styles/legend/MrdiaEstadoMrida_3_1.png" /> C3<br />\
    <img src="styles/legend/MrdiaEstadoMrida_3_2.png" /> C4<br />\
    <img src="styles/legend/MrdiaEstadoMrida_3_3.png" /> C5<br />\
    <img src="styles/legend/MrdiaEstadoMrida_3_4.png" /> CX<br />\
    <img src="styles/legend/MrdiaEstadoMrida_3_5.png" /> <br />' });
var format_TrujilloEstadoTrujillo_4 = new ol.format.GeoJSON();
var features_TrujilloEstadoTrujillo_4 = format_TrujilloEstadoTrujillo_4.readFeatures(json_TrujilloEstadoTrujillo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TrujilloEstadoTrujillo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrujilloEstadoTrujillo_4.addFeatures(features_TrujilloEstadoTrujillo_4);
var lyr_TrujilloEstadoTrujillo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrujilloEstadoTrujillo_4, 
                style: style_TrujilloEstadoTrujillo_4,
                popuplayertitle: 'Trujillo — Estado Trujillo',
                interactive: true,
    title: 'Trujillo — Estado Trujillo<br />\
    <img src="styles/legend/TrujilloEstadoTrujillo_4_0.png" /> C2<br />\
    <img src="styles/legend/TrujilloEstadoTrujillo_4_1.png" /> C3<br />\
    <img src="styles/legend/TrujilloEstadoTrujillo_4_2.png" /> C4<br />\
    <img src="styles/legend/TrujilloEstadoTrujillo_4_3.png" /> C5<br />\
    <img src="styles/legend/TrujilloEstadoTrujillo_4_4.png" /> CX<br />\
    <img src="styles/legend/TrujilloEstadoTrujillo_4_5.png" /> <br />' });
var format_LaraEstadoLara_5 = new ol.format.GeoJSON();
var features_LaraEstadoLara_5 = format_LaraEstadoLara_5.readFeatures(json_LaraEstadoLara_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LaraEstadoLara_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaraEstadoLara_5.addFeatures(features_LaraEstadoLara_5);
var lyr_LaraEstadoLara_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaraEstadoLara_5, 
                style: style_LaraEstadoLara_5,
                popuplayertitle: 'Lara — Estado Lara ',
                interactive: true,
    title: 'Lara — Estado Lara <br />\
    <img src="styles/legend/LaraEstadoLara_5_0.png" /> C2<br />\
    <img src="styles/legend/LaraEstadoLara_5_1.png" /> C3<br />\
    <img src="styles/legend/LaraEstadoLara_5_2.png" /> C4<br />\
    <img src="styles/legend/LaraEstadoLara_5_3.png" /> C5<br />\
    <img src="styles/legend/LaraEstadoLara_5_4.png" /> CX<br />\
    <img src="styles/legend/LaraEstadoLara_5_5.png" /> <br />' });
var format_YaracuyEstadoYaracuy_6 = new ol.format.GeoJSON();
var features_YaracuyEstadoYaracuy_6 = format_YaracuyEstadoYaracuy_6.readFeatures(json_YaracuyEstadoYaracuy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_YaracuyEstadoYaracuy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YaracuyEstadoYaracuy_6.addFeatures(features_YaracuyEstadoYaracuy_6);
var lyr_YaracuyEstadoYaracuy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YaracuyEstadoYaracuy_6, 
                style: style_YaracuyEstadoYaracuy_6,
                popuplayertitle: 'Yaracuy — Estado Yaracuy',
                interactive: true,
    title: 'Yaracuy — Estado Yaracuy<br />\
    <img src="styles/legend/YaracuyEstadoYaracuy_6_0.png" /> C2<br />\
    <img src="styles/legend/YaracuyEstadoYaracuy_6_1.png" /> C3<br />\
    <img src="styles/legend/YaracuyEstadoYaracuy_6_2.png" /> C4<br />\
    <img src="styles/legend/YaracuyEstadoYaracuy_6_3.png" /> C5<br />\
    <img src="styles/legend/YaracuyEstadoYaracuy_6_4.png" /> CX<br />\
    <img src="styles/legend/YaracuyEstadoYaracuy_6_5.png" /> <br />' });
var format_CaraboboEstadoCarabobo_7 = new ol.format.GeoJSON();
var features_CaraboboEstadoCarabobo_7 = format_CaraboboEstadoCarabobo_7.readFeatures(json_CaraboboEstadoCarabobo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CaraboboEstadoCarabobo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaraboboEstadoCarabobo_7.addFeatures(features_CaraboboEstadoCarabobo_7);
var lyr_CaraboboEstadoCarabobo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaraboboEstadoCarabobo_7, 
                style: style_CaraboboEstadoCarabobo_7,
                popuplayertitle: 'Carabobo — Estado Carabobo',
                interactive: true,
    title: 'Carabobo — Estado Carabobo<br />\
    <img src="styles/legend/CaraboboEstadoCarabobo_7_0.png" /> C2<br />\
    <img src="styles/legend/CaraboboEstadoCarabobo_7_1.png" /> C3<br />\
    <img src="styles/legend/CaraboboEstadoCarabobo_7_2.png" /> C4<br />\
    <img src="styles/legend/CaraboboEstadoCarabobo_7_3.png" /> C5<br />\
    <img src="styles/legend/CaraboboEstadoCarabobo_7_4.png" /> CX<br />\
    <img src="styles/legend/CaraboboEstadoCarabobo_7_5.png" /> <br />' });
var format_PortuguesaEstadoPortuguesa_8 = new ol.format.GeoJSON();
var features_PortuguesaEstadoPortuguesa_8 = format_PortuguesaEstadoPortuguesa_8.readFeatures(json_PortuguesaEstadoPortuguesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PortuguesaEstadoPortuguesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortuguesaEstadoPortuguesa_8.addFeatures(features_PortuguesaEstadoPortuguesa_8);
var lyr_PortuguesaEstadoPortuguesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortuguesaEstadoPortuguesa_8, 
                style: style_PortuguesaEstadoPortuguesa_8,
                popuplayertitle: 'Portuguesa — Estado Portuguesa',
                interactive: true,
    title: 'Portuguesa — Estado Portuguesa<br />\
    <img src="styles/legend/PortuguesaEstadoPortuguesa_8_0.png" /> C2<br />\
    <img src="styles/legend/PortuguesaEstadoPortuguesa_8_1.png" /> C3<br />\
    <img src="styles/legend/PortuguesaEstadoPortuguesa_8_2.png" /> C4<br />\
    <img src="styles/legend/PortuguesaEstadoPortuguesa_8_3.png" /> C5<br />\
    <img src="styles/legend/PortuguesaEstadoPortuguesa_8_4.png" /> CX<br />\
    <img src="styles/legend/PortuguesaEstadoPortuguesa_8_5.png" /> <br />' });
var format_CojedesEstadoCojedes_9 = new ol.format.GeoJSON();
var features_CojedesEstadoCojedes_9 = format_CojedesEstadoCojedes_9.readFeatures(json_CojedesEstadoCojedes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CojedesEstadoCojedes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CojedesEstadoCojedes_9.addFeatures(features_CojedesEstadoCojedes_9);
var lyr_CojedesEstadoCojedes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CojedesEstadoCojedes_9, 
                style: style_CojedesEstadoCojedes_9,
                popuplayertitle: 'Cojedes — Estado Cojedes',
                interactive: true,
    title: 'Cojedes — Estado Cojedes<br />\
    <img src="styles/legend/CojedesEstadoCojedes_9_0.png" /> C2<br />\
    <img src="styles/legend/CojedesEstadoCojedes_9_1.png" /> C3<br />\
    <img src="styles/legend/CojedesEstadoCojedes_9_2.png" /> C4<br />\
    <img src="styles/legend/CojedesEstadoCojedes_9_3.png" /> C5<br />\
    <img src="styles/legend/CojedesEstadoCojedes_9_4.png" /> CX<br />\
    <img src="styles/legend/CojedesEstadoCojedes_9_5.png" /> <br />' });
var format_DistritoCapital_10 = new ol.format.GeoJSON();
var features_DistritoCapital_10 = format_DistritoCapital_10.readFeatures(json_DistritoCapital_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DistritoCapital_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritoCapital_10.addFeatures(features_DistritoCapital_10);
var lyr_DistritoCapital_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritoCapital_10, 
                style: style_DistritoCapital_10,
                popuplayertitle: 'Distrito Capital',
                interactive: true,
    title: 'Distrito Capital<br />\
    <img src="styles/legend/DistritoCapital_10_0.png" /> C2<br />\
    <img src="styles/legend/DistritoCapital_10_1.png" /> C3<br />\
    <img src="styles/legend/DistritoCapital_10_2.png" /> C4<br />\
    <img src="styles/legend/DistritoCapital_10_3.png" /> C5<br />\
    <img src="styles/legend/DistritoCapital_10_4.png" /> CX<br />\
    <img src="styles/legend/DistritoCapital_10_5.png" /> <br />' });
var format_MirandaEstadoMiranda_11 = new ol.format.GeoJSON();
var features_MirandaEstadoMiranda_11 = format_MirandaEstadoMiranda_11.readFeatures(json_MirandaEstadoMiranda_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MirandaEstadoMiranda_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MirandaEstadoMiranda_11.addFeatures(features_MirandaEstadoMiranda_11);
var lyr_MirandaEstadoMiranda_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MirandaEstadoMiranda_11, 
                style: style_MirandaEstadoMiranda_11,
                popuplayertitle: 'Miranda — Estado Miranda',
                interactive: true,
    title: 'Miranda — Estado Miranda<br />\
    <img src="styles/legend/MirandaEstadoMiranda_11_0.png" /> C2<br />\
    <img src="styles/legend/MirandaEstadoMiranda_11_1.png" /> C3<br />\
    <img src="styles/legend/MirandaEstadoMiranda_11_2.png" /> C4<br />\
    <img src="styles/legend/MirandaEstadoMiranda_11_3.png" /> C5<br />\
    <img src="styles/legend/MirandaEstadoMiranda_11_4.png" /> CX<br />\
    <img src="styles/legend/MirandaEstadoMiranda_11_5.png" /> <br />' });
var format_AraguaEstadoAragua_12 = new ol.format.GeoJSON();
var features_AraguaEstadoAragua_12 = format_AraguaEstadoAragua_12.readFeatures(json_AraguaEstadoAragua_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AraguaEstadoAragua_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AraguaEstadoAragua_12.addFeatures(features_AraguaEstadoAragua_12);
var lyr_AraguaEstadoAragua_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AraguaEstadoAragua_12, 
                style: style_AraguaEstadoAragua_12,
                popuplayertitle: 'Aragua — Estado Aragua',
                interactive: true,
    title: 'Aragua — Estado Aragua<br />\
    <img src="styles/legend/AraguaEstadoAragua_12_0.png" /> C2<br />\
    <img src="styles/legend/AraguaEstadoAragua_12_1.png" /> C3<br />\
    <img src="styles/legend/AraguaEstadoAragua_12_2.png" /> C4<br />\
    <img src="styles/legend/AraguaEstadoAragua_12_3.png" /> C5<br />\
    <img src="styles/legend/AraguaEstadoAragua_12_4.png" /> CX<br />\
    <img src="styles/legend/AraguaEstadoAragua_12_5.png" /> <br />' });
var format_LaGuairaEstadoLaGuaira_13 = new ol.format.GeoJSON();
var features_LaGuairaEstadoLaGuaira_13 = format_LaGuairaEstadoLaGuaira_13.readFeatures(json_LaGuairaEstadoLaGuaira_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LaGuairaEstadoLaGuaira_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaGuairaEstadoLaGuaira_13.addFeatures(features_LaGuairaEstadoLaGuaira_13);
var lyr_LaGuairaEstadoLaGuaira_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaGuairaEstadoLaGuaira_13, 
                style: style_LaGuairaEstadoLaGuaira_13,
                popuplayertitle: 'La Guaira — Estado La Guaira',
                interactive: true,
    title: 'La Guaira — Estado La Guaira<br />\
    <img src="styles/legend/LaGuairaEstadoLaGuaira_13_0.png" /> C2<br />\
    <img src="styles/legend/LaGuairaEstadoLaGuaira_13_1.png" /> C3<br />\
    <img src="styles/legend/LaGuairaEstadoLaGuaira_13_2.png" /> C4<br />\
    <img src="styles/legend/LaGuairaEstadoLaGuaira_13_3.png" /> C5<br />\
    <img src="styles/legend/LaGuairaEstadoLaGuaira_13_4.png" /> CX<br />\
    <img src="styles/legend/LaGuairaEstadoLaGuaira_13_5.png" /> <br />' });
var format_NuevaEspartaEstadoNuevaEsparta_14 = new ol.format.GeoJSON();
var features_NuevaEspartaEstadoNuevaEsparta_14 = format_NuevaEspartaEstadoNuevaEsparta_14.readFeatures(json_NuevaEspartaEstadoNuevaEsparta_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NuevaEspartaEstadoNuevaEsparta_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NuevaEspartaEstadoNuevaEsparta_14.addFeatures(features_NuevaEspartaEstadoNuevaEsparta_14);
var lyr_NuevaEspartaEstadoNuevaEsparta_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NuevaEspartaEstadoNuevaEsparta_14, 
                style: style_NuevaEspartaEstadoNuevaEsparta_14,
                popuplayertitle: 'Nueva Esparta — Estado Nueva Esparta',
                interactive: true,
    title: 'Nueva Esparta — Estado Nueva Esparta<br />\
    <img src="styles/legend/NuevaEspartaEstadoNuevaEsparta_14_0.png" /> C2<br />\
    <img src="styles/legend/NuevaEspartaEstadoNuevaEsparta_14_1.png" /> C3<br />\
    <img src="styles/legend/NuevaEspartaEstadoNuevaEsparta_14_2.png" /> C4<br />\
    <img src="styles/legend/NuevaEspartaEstadoNuevaEsparta_14_3.png" /> C5<br />\
    <img src="styles/legend/NuevaEspartaEstadoNuevaEsparta_14_4.png" /> CX<br />\
    <img src="styles/legend/NuevaEspartaEstadoNuevaEsparta_14_5.png" /> <br />' });
var format_SucreEstadoSucre_15 = new ol.format.GeoJSON();
var features_SucreEstadoSucre_15 = format_SucreEstadoSucre_15.readFeatures(json_SucreEstadoSucre_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SucreEstadoSucre_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SucreEstadoSucre_15.addFeatures(features_SucreEstadoSucre_15);
var lyr_SucreEstadoSucre_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SucreEstadoSucre_15, 
                style: style_SucreEstadoSucre_15,
                popuplayertitle: 'Sucre — Estado Sucre',
                interactive: true,
    title: 'Sucre — Estado Sucre<br />\
    <img src="styles/legend/SucreEstadoSucre_15_0.png" /> C2<br />\
    <img src="styles/legend/SucreEstadoSucre_15_1.png" /> C3<br />\
    <img src="styles/legend/SucreEstadoSucre_15_2.png" /> C4<br />\
    <img src="styles/legend/SucreEstadoSucre_15_3.png" /> C5<br />\
    <img src="styles/legend/SucreEstadoSucre_15_4.png" /> CX<br />\
    <img src="styles/legend/SucreEstadoSucre_15_5.png" /> <br />' });
var format_MonagasEstadoMonagas_16 = new ol.format.GeoJSON();
var features_MonagasEstadoMonagas_16 = format_MonagasEstadoMonagas_16.readFeatures(json_MonagasEstadoMonagas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MonagasEstadoMonagas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonagasEstadoMonagas_16.addFeatures(features_MonagasEstadoMonagas_16);
var lyr_MonagasEstadoMonagas_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonagasEstadoMonagas_16, 
                style: style_MonagasEstadoMonagas_16,
                popuplayertitle: 'Monagas — Estado Monagas',
                interactive: true,
    title: 'Monagas — Estado Monagas<br />\
    <img src="styles/legend/MonagasEstadoMonagas_16_0.png" /> C2<br />\
    <img src="styles/legend/MonagasEstadoMonagas_16_1.png" /> C3<br />\
    <img src="styles/legend/MonagasEstadoMonagas_16_2.png" /> C4<br />\
    <img src="styles/legend/MonagasEstadoMonagas_16_3.png" /> C5<br />\
    <img src="styles/legend/MonagasEstadoMonagas_16_4.png" /> CX<br />\
    <img src="styles/legend/MonagasEstadoMonagas_16_5.png" /> <br />' });
var format_DeltaAmacuroEstadoDeltaAmacuro_17 = new ol.format.GeoJSON();
var features_DeltaAmacuroEstadoDeltaAmacuro_17 = format_DeltaAmacuroEstadoDeltaAmacuro_17.readFeatures(json_DeltaAmacuroEstadoDeltaAmacuro_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DeltaAmacuroEstadoDeltaAmacuro_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeltaAmacuroEstadoDeltaAmacuro_17.addFeatures(features_DeltaAmacuroEstadoDeltaAmacuro_17);
var lyr_DeltaAmacuroEstadoDeltaAmacuro_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeltaAmacuroEstadoDeltaAmacuro_17, 
                style: style_DeltaAmacuroEstadoDeltaAmacuro_17,
                popuplayertitle: 'Delta Amacuro — Estado Delta Amacuro',
                interactive: true,
    title: 'Delta Amacuro — Estado Delta Amacuro<br />\
    <img src="styles/legend/DeltaAmacuroEstadoDeltaAmacuro_17_0.png" /> C2<br />\
    <img src="styles/legend/DeltaAmacuroEstadoDeltaAmacuro_17_1.png" /> C3<br />\
    <img src="styles/legend/DeltaAmacuroEstadoDeltaAmacuro_17_2.png" /> C4<br />\
    <img src="styles/legend/DeltaAmacuroEstadoDeltaAmacuro_17_3.png" /> C5<br />\
    <img src="styles/legend/DeltaAmacuroEstadoDeltaAmacuro_17_4.png" /> CX<br />\
    <img src="styles/legend/DeltaAmacuroEstadoDeltaAmacuro_17_5.png" /> <br />' });
var format_AnzoteguiEstadoAnzotegui_18 = new ol.format.GeoJSON();
var features_AnzoteguiEstadoAnzotegui_18 = format_AnzoteguiEstadoAnzotegui_18.readFeatures(json_AnzoteguiEstadoAnzotegui_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AnzoteguiEstadoAnzotegui_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnzoteguiEstadoAnzotegui_18.addFeatures(features_AnzoteguiEstadoAnzotegui_18);
var lyr_AnzoteguiEstadoAnzotegui_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnzoteguiEstadoAnzotegui_18, 
                style: style_AnzoteguiEstadoAnzotegui_18,
                popuplayertitle: 'Anzoátegui — Estado Anzoátegui',
                interactive: true,
    title: 'Anzoátegui — Estado Anzoátegui<br />\
    <img src="styles/legend/AnzoteguiEstadoAnzotegui_18_0.png" /> C2<br />\
    <img src="styles/legend/AnzoteguiEstadoAnzotegui_18_1.png" /> C3<br />\
    <img src="styles/legend/AnzoteguiEstadoAnzotegui_18_2.png" /> C4<br />\
    <img src="styles/legend/AnzoteguiEstadoAnzotegui_18_3.png" /> C5<br />\
    <img src="styles/legend/AnzoteguiEstadoAnzotegui_18_4.png" /> CX<br />\
    <img src="styles/legend/AnzoteguiEstadoAnzotegui_18_5.png" /> <br />' });
var format_GuricoEstadoGurico_19 = new ol.format.GeoJSON();
var features_GuricoEstadoGurico_19 = format_GuricoEstadoGurico_19.readFeatures(json_GuricoEstadoGurico_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GuricoEstadoGurico_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GuricoEstadoGurico_19.addFeatures(features_GuricoEstadoGurico_19);
var lyr_GuricoEstadoGurico_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GuricoEstadoGurico_19, 
                style: style_GuricoEstadoGurico_19,
                popuplayertitle: 'Guárico — Estado Guárico',
                interactive: true,
    title: 'Guárico — Estado Guárico<br />\
    <img src="styles/legend/GuricoEstadoGurico_19_0.png" /> C2<br />\
    <img src="styles/legend/GuricoEstadoGurico_19_1.png" /> C3<br />\
    <img src="styles/legend/GuricoEstadoGurico_19_2.png" /> C4<br />\
    <img src="styles/legend/GuricoEstadoGurico_19_3.png" /> C5<br />\
    <img src="styles/legend/GuricoEstadoGurico_19_4.png" /> CX<br />\
    <img src="styles/legend/GuricoEstadoGurico_19_5.png" /> <br />' });
var format_BarinasEstadoBarinas_20 = new ol.format.GeoJSON();
var features_BarinasEstadoBarinas_20 = format_BarinasEstadoBarinas_20.readFeatures(json_BarinasEstadoBarinas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BarinasEstadoBarinas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarinasEstadoBarinas_20.addFeatures(features_BarinasEstadoBarinas_20);
var lyr_BarinasEstadoBarinas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarinasEstadoBarinas_20, 
                style: style_BarinasEstadoBarinas_20,
                popuplayertitle: 'Barinas — Estado Barinas',
                interactive: true,
    title: 'Barinas — Estado Barinas<br />\
    <img src="styles/legend/BarinasEstadoBarinas_20_0.png" /> C2<br />\
    <img src="styles/legend/BarinasEstadoBarinas_20_1.png" /> C3<br />\
    <img src="styles/legend/BarinasEstadoBarinas_20_2.png" /> C4<br />\
    <img src="styles/legend/BarinasEstadoBarinas_20_3.png" /> C5<br />\
    <img src="styles/legend/BarinasEstadoBarinas_20_4.png" /> CX<br />\
    <img src="styles/legend/BarinasEstadoBarinas_20_5.png" /> <br />' });
var format_ApureEstadoApure_21 = new ol.format.GeoJSON();
var features_ApureEstadoApure_21 = format_ApureEstadoApure_21.readFeatures(json_ApureEstadoApure_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ApureEstadoApure_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApureEstadoApure_21.addFeatures(features_ApureEstadoApure_21);
var lyr_ApureEstadoApure_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApureEstadoApure_21, 
                style: style_ApureEstadoApure_21,
                popuplayertitle: 'Apure — Estado Apure',
                interactive: true,
    title: 'Apure — Estado Apure<br />\
    <img src="styles/legend/ApureEstadoApure_21_0.png" /> C2<br />\
    <img src="styles/legend/ApureEstadoApure_21_1.png" /> C3<br />\
    <img src="styles/legend/ApureEstadoApure_21_2.png" /> C4<br />\
    <img src="styles/legend/ApureEstadoApure_21_3.png" /> C5<br />\
    <img src="styles/legend/ApureEstadoApure_21_4.png" /> CX<br />\
    <img src="styles/legend/ApureEstadoApure_21_5.png" /> <br />' });
var format_BolvarEstadoBolvar_22 = new ol.format.GeoJSON();
var features_BolvarEstadoBolvar_22 = format_BolvarEstadoBolvar_22.readFeatures(json_BolvarEstadoBolvar_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BolvarEstadoBolvar_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BolvarEstadoBolvar_22.addFeatures(features_BolvarEstadoBolvar_22);
var lyr_BolvarEstadoBolvar_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BolvarEstadoBolvar_22, 
                style: style_BolvarEstadoBolvar_22,
                popuplayertitle: 'Bolívar — Estado Bolívar',
                interactive: true,
    title: 'Bolívar — Estado Bolívar<br />\
    <img src="styles/legend/BolvarEstadoBolvar_22_0.png" /> C2<br />\
    <img src="styles/legend/BolvarEstadoBolvar_22_1.png" /> C3<br />\
    <img src="styles/legend/BolvarEstadoBolvar_22_2.png" /> C4<br />\
    <img src="styles/legend/BolvarEstadoBolvar_22_3.png" /> C5<br />\
    <img src="styles/legend/BolvarEstadoBolvar_22_4.png" /> CX<br />\
    <img src="styles/legend/BolvarEstadoBolvar_22_5.png" /> <br />' });
var format_AmazonasEstado_Amazonas_23 = new ol.format.GeoJSON();
var features_AmazonasEstado_Amazonas_23 = format_AmazonasEstado_Amazonas_23.readFeatures(json_AmazonasEstado_Amazonas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AmazonasEstado_Amazonas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmazonasEstado_Amazonas_23.addFeatures(features_AmazonasEstado_Amazonas_23);
var lyr_AmazonasEstado_Amazonas_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmazonasEstado_Amazonas_23, 
                style: style_AmazonasEstado_Amazonas_23,
                popuplayertitle: 'Amazonas — Estado_Amazonas',
                interactive: true,
    title: 'Amazonas — Estado_Amazonas<br />\
    <img src="styles/legend/AmazonasEstado_Amazonas_23_0.png" /> C2<br />\
    <img src="styles/legend/AmazonasEstado_Amazonas_23_1.png" /> C3<br />\
    <img src="styles/legend/AmazonasEstado_Amazonas_23_2.png" /> C4<br />\
    <img src="styles/legend/AmazonasEstado_Amazonas_23_3.png" /> C5<br />\
    <img src="styles/legend/AmazonasEstado_Amazonas_23_4.png" /> CX<br />\
    <img src="styles/legend/AmazonasEstado_Amazonas_23_5.png" /> <br />' });
var format_MapadecorrosionDivEstadal_24 = new ol.format.GeoJSON();
var features_MapadecorrosionDivEstadal_24 = format_MapadecorrosionDivEstadal_24.readFeatures(json_MapadecorrosionDivEstadal_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MapadecorrosionDivEstadal_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadecorrosionDivEstadal_24.addFeatures(features_MapadecorrosionDivEstadal_24);
var lyr_MapadecorrosionDivEstadal_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapadecorrosionDivEstadal_24, 
                style: style_MapadecorrosionDivEstadal_24,
                popuplayertitle: 'Mapa de corrosion Div. Estadal',
                interactive: true,
    title: 'Mapa de corrosion Div. Estadal<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_0.png" /> Amazonas<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_1.png" /> Anzoátegui<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_2.png" /> Apure<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_3.png" /> Aragua<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_4.png" /> Barinas<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_5.png" /> Bolívar<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_6.png" /> Carabobo<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_7.png" /> Cojedes<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_8.png" /> Delta Amacuro<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_9.png" /> Dependencias Federales<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_10.png" /> Distrito Capital<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_11.png" /> Falcón<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_12.png" /> Guárico<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_13.png" /> La Guaira<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_14.png" /> Lara<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_15.png" /> Mérida<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_16.png" /> Miranda<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_17.png" /> Monagas<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_18.png" /> Nueva Esparta<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_19.png" /> Portuguesa<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_20.png" /> Sucre<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_21.png" /> Táchira<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_22.png" /> Trujillo<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_23.png" /> Yaracuy<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_24.png" /> Zulia<br />\
    <img src="styles/legend/MapadecorrosionDivEstadal_24_25.png" /> <br />' });
var group_Estados = new ol.layer.Group({
                                layers: [lyr_FalcnEstadoFalcn_0,lyr_ZuliaEstadoZulia_1,lyr_TchiraEstadoTchira_2,lyr_MrdiaEstadoMrida_3,lyr_TrujilloEstadoTrujillo_4,lyr_LaraEstadoLara_5,lyr_YaracuyEstadoYaracuy_6,lyr_CaraboboEstadoCarabobo_7,lyr_PortuguesaEstadoPortuguesa_8,lyr_CojedesEstadoCojedes_9,lyr_DistritoCapital_10,lyr_MirandaEstadoMiranda_11,lyr_AraguaEstadoAragua_12,lyr_LaGuairaEstadoLaGuaira_13,lyr_NuevaEspartaEstadoNuevaEsparta_14,lyr_SucreEstadoSucre_15,lyr_MonagasEstadoMonagas_16,lyr_DeltaAmacuroEstadoDeltaAmacuro_17,lyr_AnzoteguiEstadoAnzotegui_18,lyr_GuricoEstadoGurico_19,lyr_BarinasEstadoBarinas_20,lyr_ApureEstadoApure_21,lyr_BolvarEstadoBolvar_22,lyr_AmazonasEstado_Amazonas_23,],
                                fold: 'open',
                                title: 'Estados'});

lyr_FalcnEstadoFalcn_0.setVisible(true);lyr_ZuliaEstadoZulia_1.setVisible(true);lyr_TchiraEstadoTchira_2.setVisible(true);lyr_MrdiaEstadoMrida_3.setVisible(true);lyr_TrujilloEstadoTrujillo_4.setVisible(true);lyr_LaraEstadoLara_5.setVisible(true);lyr_YaracuyEstadoYaracuy_6.setVisible(true);lyr_CaraboboEstadoCarabobo_7.setVisible(true);lyr_PortuguesaEstadoPortuguesa_8.setVisible(true);lyr_CojedesEstadoCojedes_9.setVisible(true);lyr_DistritoCapital_10.setVisible(true);lyr_MirandaEstadoMiranda_11.setVisible(true);lyr_AraguaEstadoAragua_12.setVisible(true);lyr_LaGuairaEstadoLaGuaira_13.setVisible(true);lyr_NuevaEspartaEstadoNuevaEsparta_14.setVisible(true);lyr_SucreEstadoSucre_15.setVisible(true);lyr_MonagasEstadoMonagas_16.setVisible(true);lyr_DeltaAmacuroEstadoDeltaAmacuro_17.setVisible(true);lyr_AnzoteguiEstadoAnzotegui_18.setVisible(true);lyr_GuricoEstadoGurico_19.setVisible(true);lyr_BarinasEstadoBarinas_20.setVisible(true);lyr_ApureEstadoApure_21.setVisible(true);lyr_BolvarEstadoBolvar_22.setVisible(true);lyr_AmazonasEstado_Amazonas_23.setVisible(true);lyr_MapadecorrosionDivEstadal_24.setVisible(true);
var layersList = [group_Estados,lyr_MapadecorrosionDivEstadal_24];
lyr_FalcnEstadoFalcn_0.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_ZuliaEstadoZulia_1.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_TchiraEstadoTchira_2.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_MrdiaEstadoMrida_3.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_TrujilloEstadoTrujillo_4.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_LaraEstadoLara_5.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_YaracuyEstadoYaracuy_6.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_CaraboboEstadoCarabobo_7.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_PortuguesaEstadoPortuguesa_8.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_CojedesEstadoCojedes_9.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_DistritoCapital_10.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_MirandaEstadoMiranda_11.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_AraguaEstadoAragua_12.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_LaGuairaEstadoLaGuaira_13.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_NuevaEspartaEstadoNuevaEsparta_14.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_SucreEstadoSucre_15.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_MonagasEstadoMonagas_16.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_DeltaAmacuroEstadoDeltaAmacuro_17.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_AnzoteguiEstadoAnzotegui_18.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_GuricoEstadoGurico_19.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_BarinasEstadoBarinas_20.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_ApureEstadoApure_21.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_BolvarEstadoBolvar_22.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_AmazonasEstado_Amazonas_23.set('fieldAliases', {'fid': 'fid', 'Nombre Municipio': 'Nombre Municipio', 'Pais': 'Pais', 'Estado': 'Estado', 'Nivel_de_Corrosion': 'Nivel_de_Corrosion', });
lyr_MapadecorrosionDivEstadal_24.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Pais': 'Pais', 'Nivel_de_corrosion': 'Nivel_de_corrosion', });
lyr_FalcnEstadoFalcn_0.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_ZuliaEstadoZulia_1.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_TchiraEstadoTchira_2.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_MrdiaEstadoMrida_3.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_TrujilloEstadoTrujillo_4.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_LaraEstadoLara_5.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_YaracuyEstadoYaracuy_6.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_CaraboboEstadoCarabobo_7.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_PortuguesaEstadoPortuguesa_8.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_CojedesEstadoCojedes_9.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_DistritoCapital_10.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_MirandaEstadoMiranda_11.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_AraguaEstadoAragua_12.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_LaGuairaEstadoLaGuaira_13.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_NuevaEspartaEstadoNuevaEsparta_14.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_SucreEstadoSucre_15.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_MonagasEstadoMonagas_16.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_DeltaAmacuroEstadoDeltaAmacuro_17.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_AnzoteguiEstadoAnzotegui_18.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_GuricoEstadoGurico_19.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_BarinasEstadoBarinas_20.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_ApureEstadoApure_21.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_BolvarEstadoBolvar_22.set('fieldImages', {'fid': '', 'Nombre Municipio': '', 'Pais': '', 'Estado': '', 'Nivel_de_Corrosion': '', });
lyr_AmazonasEstado_Amazonas_23.set('fieldImages', {'fid': 'TextEdit', 'Nombre Municipio': 'TextEdit', 'Pais': 'TextEdit', 'Estado': 'TextEdit', 'Nivel_de_Corrosion': 'TextEdit', });
lyr_MapadecorrosionDivEstadal_24.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Pais': 'TextEdit', 'Nivel_de_corrosion': 'TextEdit', });
lyr_FalcnEstadoFalcn_0.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_ZuliaEstadoZulia_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_TchiraEstadoTchira_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_MrdiaEstadoMrida_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_TrujilloEstadoTrujillo_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_LaraEstadoLara_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_YaracuyEstadoYaracuy_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_CaraboboEstadoCarabobo_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_PortuguesaEstadoPortuguesa_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_CojedesEstadoCojedes_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_DistritoCapital_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_MirandaEstadoMiranda_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_AraguaEstadoAragua_12.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_LaGuairaEstadoLaGuaira_13.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_NuevaEspartaEstadoNuevaEsparta_14.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_SucreEstadoSucre_15.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_MonagasEstadoMonagas_16.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_DeltaAmacuroEstadoDeltaAmacuro_17.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_AnzoteguiEstadoAnzotegui_18.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_GuricoEstadoGurico_19.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_BarinasEstadoBarinas_20.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_ApureEstadoApure_21.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_BolvarEstadoBolvar_22.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_AmazonasEstado_Amazonas_23.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nombre Municipio': 'inline label - visible with data', 'Pais': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Nivel_de_Corrosion': 'inline label - visible with data', });
lyr_MapadecorrosionDivEstadal_24.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - always visible', 'Pais': 'hidden field', 'Nivel_de_corrosion': 'hidden field', });
lyr_MapadecorrosionDivEstadal_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});