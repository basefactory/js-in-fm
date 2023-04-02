import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';
import Projection from 'ol/proj/Projection.js';

const projection = new Projection({
    code: 'EPSG:31370',
    units: 'm',
  });

const grb = [new TileLayer({
  source: new TileWMS({
    url: 'https://geo.api.vlaanderen.be/GRB-basiskaart/wms',
    params: {'LAYERS': 'GRB_BSK'}
  })
})]

const map = new Map({
  target: 'map',
  layers: grb,
  view: new View({
    center: [88029.158101,213524.544498],
    projection: projection,
    zoom: 18,
  }),
});