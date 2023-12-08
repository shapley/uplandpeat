ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:27700").setExtent([253055.900412, 199813.431000, 344611.629588, 243863.829000]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_bbnpaline_1 = new ol.format.GeoJSON();
var features_bbnpaline_1 = format_bbnpaline_1.readFeatures(json_bbnpaline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_bbnpaline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bbnpaline_1.addFeatures(features_bbnpaline_1);
var lyr_bbnpaline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bbnpaline_1, 
                style: style_bbnpaline_1,
                interactive: false,
                title: '<img src="styles/legend/bbnpaline_1.png" /> bbnpaline'
            });
var format_ADAS_peat_june_2015_2 = new ol.format.GeoJSON();
var features_ADAS_peat_june_2015_2 = format_ADAS_peat_june_2015_2.readFeatures(json_ADAS_peat_june_2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_ADAS_peat_june_2015_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADAS_peat_june_2015_2.addFeatures(features_ADAS_peat_june_2015_2);
var lyr_ADAS_peat_june_2015_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADAS_peat_june_2015_2, 
                style: style_ADAS_peat_june_2015_2,
                interactive: false,
                title: '<img src="styles/legend/ADAS_peat_june_2015_2.png" /> ADAS_peat_june_2015'
            });
var format_grid_100m_adas_3 = new ol.format.GeoJSON();
var features_grid_100m_adas_3 = format_grid_100m_adas_3.readFeatures(json_grid_100m_adas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_grid_100m_adas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grid_100m_adas_3.addFeatures(features_grid_100m_adas_3);
var lyr_grid_100m_adas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grid_100m_adas_3,
maxResolution:1.540245638374408,
 minResolution:0.014002233076130981,

                style: style_grid_100m_adas_3,
                interactive: false,
                title: '<img src="styles/legend/grid_100m_adas_3.png" /> grid_100m_adas'
            });
var format_grid_100m_points_4 = new ol.format.GeoJSON();
var features_grid_100m_points_4 = format_grid_100m_points_4.readFeatures(json_grid_100m_points_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_grid_100m_points_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grid_100m_points_4.addFeatures(features_grid_100m_points_4);
var lyr_grid_100m_points_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grid_100m_points_4,
maxResolution:1.540245638374408,
 minResolution:0.014002233076130981,

                style: style_grid_100m_points_4,
                interactive: false,
                title: '<img src="styles/legend/grid_100m_points_4.png" /> grid_100m_points'
            });
var format_peatland_survey_returns_5 = new ol.format.GeoJSON();
var features_peatland_survey_returns_5 = format_peatland_survey_returns_5.readFeatures(json_peatland_survey_returns_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_peatland_survey_returns_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_peatland_survey_returns_5.addFeatures(features_peatland_survey_returns_5);
var lyr_peatland_survey_returns_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_peatland_survey_returns_5, 
                style: style_peatland_survey_returns_5,
                interactive: false,
    title: 'peatland_survey_returns<br />\
    <img src="styles/legend/peatland_survey_returns_5_0.png" /> no_peat<br />\
    <img src="styles/legend/peatland_survey_returns_5_1.png" /> 0-25<br />\
    <img src="styles/legend/peatland_survey_returns_5_2.png" /> 25-50<br />\
    <img src="styles/legend/peatland_survey_returns_5_3.png" /> 50-75<br />\
    <img src="styles/legend/peatland_survey_returns_5_4.png" /> 75-100<br />\
    <img src="styles/legend/peatland_survey_returns_5_5.png" /> 100 plus<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_bbnpaline_1.setVisible(true);lyr_ADAS_peat_june_2015_2.setVisible(true);lyr_grid_100m_adas_3.setVisible(true);lyr_grid_100m_points_4.setVisible(true);lyr_peatland_survey_returns_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bbnpaline_1,lyr_ADAS_peat_june_2015_2,lyr_grid_100m_adas_3,lyr_grid_100m_points_4,lyr_peatland_survey_returns_5];
lyr_bbnpaline_1.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'name': 'name', 'welshname': 'welshname', 'designation_order': 'designation_order', 'variation_order': 'variation_order', 'hectares': 'hectares', 'edit_date': 'edit_date', 'edit_date_1': 'edit_date_1', 'edit_date_1_notes': 'edit_date_1_notes', 'ODKUUID': 'ODKUUID', });
lyr_ADAS_peat_june_2015_2.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'id': 'id', 'peat': 'peat', 'degradaton': 'degradaton', 'area_ha': 'area_ha', 'area_sqm': 'area_sqm', });
lyr_grid_100m_adas_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_grid_100m_points_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_peatland_survey_returns_5.set('fieldAliases', {'fid': 'fid', 'easting': 'easting', 'northing': 'northing', 'name:': 'name:', 'start_a_new_survey_': 'start_a_new_survey_', 'date:': 'date:', 'aspect:': 'aspect:', 'geopoint': 'geopoint', 'geopoint_altitude': 'geopoint_altitude', 'geopoint_accuracy': 'geopoint_accuracy', 'slope:': 'slope:', 'weather:': 'weather:', 'peat_softness:': 'peat_softness:', 'surface_wetness:': 'surface_wetness:', 'grazing:': 'grazing:', 'evidence_of_grazing_animals': 'evidence_of_grazing_animals', 'specify_other': 'specify_other', 'vegetation:': 'vegetation:', 'sphagnum_cover__': 'sphagnum_cover__', 'heather_cover__': 'heather_cover__', 'grass__not_molinia__cover__': 'grass__not_molinia__cover__', 'molinia_cover__': 'molinia_cover__', 'sedges_cover__': 'sedges_cover__', 'rush_cover__': 'rush_cover__', 'cotton_grass_cover__': 'cotton_grass_cover__', 'tree_cover__': 'tree_cover__', 'bare_ground_cover__': 'bare_ground_cover__', 'evidence_of_peat_erosion:': 'evidence_of_peat_erosion:', 'bare_peat:': 'bare_peat:', 'bare_mineral_soil:': 'bare_mineral_soil:', 'peat_depth_1:': 'peat_depth_1:', 'peat_depth_2:': 'peat_depth_2:', 'peat_depth_3:': 'peat_depth_3:', 'peat_depth_sum:': 'peat_depth_sum:', 'peat_depth_average:': 'peat_depth_average:', 'check_note1': 'check_note1', 'check_note2': 'check_note2', 'colour_code:': 'colour_code:', 'gully_present_': 'gully_present_', 'gully_width_': 'gully_width_', 'take_a_photo_facing_north:': 'take_a_photo_facing_north:', 'key': 'key', 'parent_key': 'parent_key', 'data_location_repeat': 'data_location_repeat', 'meta_instance_id': 'meta_instance_id', '_coordsys': '_coordsys', '_list{}': '_list{}', 'latitude': 'latitude', 'longitude': 'longitude', 'fme_rejection_code': 'fme_rejection_code', '_units': '_units', });
lyr_bbnpaline_1.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'TextEdit', 'name': 'TextEdit', 'welshname': 'TextEdit', 'designation_order': 'Range', 'variation_order': 'Range', 'hectares': 'TextEdit', 'edit_date': 'DateTime', 'edit_date_1': 'DateTime', 'edit_date_1_notes': 'TextEdit', 'ODKUUID': 'TextEdit', });
lyr_ADAS_peat_june_2015_2.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'id': 'Range', 'peat': 'TextEdit', 'degradaton': 'TextEdit', 'area_ha': 'TextEdit', 'area_sqm': 'TextEdit', });
lyr_grid_100m_adas_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_grid_100m_points_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_peatland_survey_returns_5.set('fieldImages', {'fid': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', 'name:': 'TextEdit', 'start_a_new_survey_': 'TextEdit', 'date:': 'TextEdit', 'aspect:': 'TextEdit', 'geopoint': 'TextEdit', 'geopoint_altitude': 'TextEdit', 'geopoint_accuracy': 'TextEdit', 'slope:': 'TextEdit', 'weather:': 'TextEdit', 'peat_softness:': 'TextEdit', 'surface_wetness:': 'TextEdit', 'grazing:': 'TextEdit', 'evidence_of_grazing_animals': 'TextEdit', 'specify_other': 'TextEdit', 'vegetation:': 'TextEdit', 'sphagnum_cover__': 'TextEdit', 'heather_cover__': 'TextEdit', 'grass__not_molinia__cover__': 'TextEdit', 'molinia_cover__': 'TextEdit', 'sedges_cover__': 'TextEdit', 'rush_cover__': 'TextEdit', 'cotton_grass_cover__': 'TextEdit', 'tree_cover__': 'TextEdit', 'bare_ground_cover__': 'TextEdit', 'evidence_of_peat_erosion:': 'TextEdit', 'bare_peat:': 'TextEdit', 'bare_mineral_soil:': 'TextEdit', 'peat_depth_1:': 'TextEdit', 'peat_depth_2:': 'TextEdit', 'peat_depth_3:': 'TextEdit', 'peat_depth_sum:': 'TextEdit', 'peat_depth_average:': 'TextEdit', 'check_note1': 'TextEdit', 'check_note2': 'TextEdit', 'colour_code:': 'TextEdit', 'gully_present_': 'TextEdit', 'gully_width_': 'TextEdit', 'take_a_photo_facing_north:': 'TextEdit', 'key': 'TextEdit', 'parent_key': 'TextEdit', 'data_location_repeat': 'TextEdit', 'meta_instance_id': 'TextEdit', '_coordsys': 'TextEdit', '_list{}': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'fme_rejection_code': 'TextEdit', '_units': 'TextEdit', });
lyr_bbnpaline_1.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'name': 'no label', 'welshname': 'no label', 'designation_order': 'no label', 'variation_order': 'no label', 'hectares': 'no label', 'edit_date': 'no label', 'edit_date_1': 'no label', 'edit_date_1_notes': 'no label', 'ODKUUID': 'no label', });
lyr_ADAS_peat_june_2015_2.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'id': 'no label', 'peat': 'no label', 'degradaton': 'no label', 'area_ha': 'no label', 'area_sqm': 'no label', });
lyr_grid_100m_adas_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_grid_100m_points_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_peatland_survey_returns_5.set('fieldLabels', {'fid': 'no label', 'easting': 'no label', 'northing': 'no label', 'name:': 'no label', 'start_a_new_survey_': 'no label', 'date:': 'no label', 'aspect:': 'no label', 'geopoint': 'no label', 'geopoint_altitude': 'no label', 'geopoint_accuracy': 'no label', 'slope:': 'no label', 'weather:': 'no label', 'peat_softness:': 'no label', 'surface_wetness:': 'no label', 'grazing:': 'no label', 'evidence_of_grazing_animals': 'no label', 'specify_other': 'no label', 'vegetation:': 'no label', 'sphagnum_cover__': 'no label', 'heather_cover__': 'no label', 'grass__not_molinia__cover__': 'no label', 'molinia_cover__': 'no label', 'sedges_cover__': 'no label', 'rush_cover__': 'no label', 'cotton_grass_cover__': 'no label', 'tree_cover__': 'no label', 'bare_ground_cover__': 'no label', 'evidence_of_peat_erosion:': 'inline label', 'bare_peat:': 'no label', 'bare_mineral_soil:': 'no label', 'peat_depth_1:': 'no label', 'peat_depth_2:': 'no label', 'peat_depth_3:': 'no label', 'peat_depth_sum:': 'inline label', 'peat_depth_average:': 'no label', 'check_note1': 'no label', 'check_note2': 'no label', 'colour_code:': 'no label', 'gully_present_': 'no label', 'gully_width_': 'no label', 'take_a_photo_facing_north:': 'inline label', 'key': 'no label', 'parent_key': 'no label', 'data_location_repeat': 'no label', 'meta_instance_id': 'no label', '_coordsys': 'no label', '_list{}': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'fme_rejection_code': 'no label', '_units': 'no label', });
lyr_peatland_survey_returns_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});