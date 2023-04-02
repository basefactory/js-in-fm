import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import TileWMS from 'ol/source/TileWMS.js';

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
    center: [330059.865450,6664050.044158],
    zoom: 18,
  }),
});