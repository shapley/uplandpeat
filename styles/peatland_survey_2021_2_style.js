var size = 0;
var placement = 'point';
function categories_peatland_survey_2021_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'no_peat':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(247,245,247,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0-25':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(223,242,12,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '25-50':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(30,200,10,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '50-75':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(243,126,11,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '75-100':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(241,17,17,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '100 plus':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(109,67,21,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_peatland_survey_2021_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("colour_code");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_peatland_survey_2021_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
