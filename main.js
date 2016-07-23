var gdal = require("gdal");
console.log('Metadata:');
var dataset = gdal.open("test3.tif");

console.log(dataset.getMetadata());

console.log("number of bands: " + dataset.bands.count());
console.log("width: " + dataset.rasterSize.x);
console.log("height: " + dataset.rasterSize.y);
console.log("geotransform: " + dataset.geoTransform);
console.log("srs: " + (dataset.srs ? dataset.srs.toWKT() : 'null'));

console.log('GCPs:');
console.log(dataset.getGCPs());

const tL = {
	pszId: "1",
  pszInfo: "",
	dfGCPPixel: 0,
	dfGCPLine: 0,
	dfGCPX: -122.370056,
	dfGCPY: 34.753972,
  dfGCPZ: 0
}

const tR = {
	pszId: "2",
  pszInfo: "",
	dfGCPPixel: 500,
	dfGCPLine: 0,
	dfGCPX: -101.761547,
	dfGCPY: 34.753972,
  dfGCPZ: 0
}

const bL = {
	pszId: "3",
  pszInfo: "",
	dfGCPPixel: 0,
	dfGCPLine: 500,
	dfGCPX: -122.370056,
	dfGCPY: 21.016497,
  dfGCPZ: 0
}

const bR = {
	pszId: "4",
  pszInfo: "",
	dfGCPPixel: 500,
	dfGCPLine: 500,
	dfGCPX: -122.370056,
	dfGCPY: 34.753972,
  dfGCPZ: 0
}

const grcs = [tL, tR, bL, bR]

dataset.setGCPs(grcs, '4326')
