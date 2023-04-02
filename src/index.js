import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js";
import TileWMS from "ol/source/TileWMS.js";
import proj4 from "proj4";
import { register } from "ol/proj/proj4.js";
import { get as getProjection } from "ol/proj.js";

proj4.defs(
  "EPSG:31370",
  "+proj=lcc +lat_0=90 +lon_0=4.36748666666667 +lat_1=51.1666672333333 +lat_2=49.8333339 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.8686,52.2978,-103.7239,-0.3366,0.457,-1.8422,-1.2747 +units=m +no_defs +type=crs"
);
register(proj4);
const projection = getProjection("EPSG:31370");

const grb = [
  new TileLayer({
    source: new TileWMS({
      url: "https://geo.api.vlaanderen.be/GRB-basiskaart/wms",
      params: { LAYERS: "GRB_BSK", CRS: "EPSG:31370" },
    }),
  }),
];

const map = new Map({
  target: "map",
  layers: grb,
  view: new View({
    center: [159895.27,203915.0],
    projection: projection,
    zoom: 22
  }),
});
