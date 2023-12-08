var size = 0;
var placement = 'point';
function categories_peatland_survey_returns_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'no_peat':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(84,176,74,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '0-25':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(240,232,3,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '25-50':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(247,176,89,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '50-75':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(202,120,12,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '75-100':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(143,56,5,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '100 plus':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(71,9,13,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_peatland_survey_returns_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("colour_code:");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_peatland_survey_returns_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
