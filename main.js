var gdal = require("gdal");
gdal.verbose()

console.log('Metadata:');
// var dataset = gdal.open("test3.tif", 'r', 'GTiff');
const gtiff = gdal.drivers.get("GTiff")
console.log('GTiff');
console.log(gtiff);
var dataset = gdal.open("test3.tif", "r", 'GTiff');

console.log(dataset.getMetadata());

// console.log("Opened with driver: " + dataset.driver.description);
console.log("number of bands: " + dataset.bands.count());
// console.log("width: " + dataset.rasterSize.x);
// console.log("height: " + dataset.rasterSize.y);
console.log("geotransform: " + dataset.geoTransform);
console.log("srs: " + (dataset.srs ? dataset.srs.toWKT() : 'null'));

console.log('GCPs:');
console.log(dataset.getGCPs());

var output = gdal.open('output.tiff', 'w', 'GTiff', 500, 500, 4)

gdal.reprojectImage({
  src: dataset,
  dst: output,
  s_srs: gdal.SpatialReference.fromEPSG(4326),
  t_srs: gdal.SpatialReference.fromEPSG(4326)
  resampling: gdal.GRA_Average
// [resampling] String optional
//
// Resampling algorithm (available options)
// [cutline] gdal.Geometry optional
//
// Must be in src dataset pixel coordinates. Use CoordinateTransformation to convert between georeferenced coordinates and pixel coordinates
// [srcBands] Integer[] optional
// [dstBands] Integer[] optional
// [srcAlphaBand] Integer optional
// [dstAlphaBand] Integer optional
// [srcNodata] Number optional
// [dstNodata] Number optional
// [memoryLimit] Integer optional
// [maxError] Number optional
// [multi] Boolean optional
// [options] String[] | Object optional
})

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

// dataset.setGCPs(grcs, '4326')

dataset.close()
output.close()
