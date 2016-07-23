var gdal = require("gdal");
console.log('hello world');
var dataset = gdal.open("test3.tif");

console.log("number of bands: " + dataset.bands.count());
console.log("width: " + dataset.rasterSize.x);
console.log("height: " + dataset.rasterSize.y);
console.log("geotransform: " + dataset.geoTransform);
console.log("srs: " + (dataset.srs ? dataset.srs.toWKT() : 'null'));
