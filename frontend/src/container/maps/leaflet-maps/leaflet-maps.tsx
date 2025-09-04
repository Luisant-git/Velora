import { FC, Fragment } from 'react';
import "leaflet/dist/leaflet.css";
import Pageheader from '../../../components/page-header/pageheader';
import SpkLeaflet from '../../../@spk-reusable-components/reusable-plugins/spk-leaflet';

interface LeafletmapsProps {}

const Leafletmaps: FC<LeafletmapsProps> = () => {
  const position: any = [51.505, -0.09];
  const redOptions: any = { color: "red" };
  const center: any = [51.51, -0.12];
  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };

  const polyline: any = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];
  const multiPolyline: any = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon: any = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  const multiPolygon: any = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle: any = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  return (
    <Fragment>
      <Pageheader title="Maps" currentpage="Leaflet Maps" activepage="Leaflet Maps" />
      <div className="row">
        <div className="col-xl-6">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Leaflet Map</div>
            </div>
            <div className="card-body">
              <div id="map">
                <SpkLeaflet
                  position={position}
                  Zoom={13}
                  scrollWheel={true}
                  Customclass="mapleaflet ht-300"
                  Id="leaflet1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Map With Markers, Circles, and Polygons</div>
            </div>
            <div className="card-body">
              <div id="map1">
                <SpkLeaflet
                  position={center}
                  Zoom={13}
                  scrollWheel={true}
                  Customclass="ht-200 sm:ht-300 md:ht-400 popup-map"
                  Id="leaflet3"
                  CirclepathOptions={fillBlueOptions}
                  Circlepostion={center}
                  MarkerpathOptions={redOptions}
                  PolylinepathOptions={limeOptions}
                  Polyllinepositions={polyline}
                  PolygonpathOptions={purpleOptions}
                  Polygonposition={polygon}
                  ReactanglepathOptions={blackOptions}
                  Bounds={rectangle}
                  MUltipolygonposition={multiPolygon}
                  Multipolyineposition={multiPolyline}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Map With Popup</div>
            </div>
            <div className="card-body">
              <div id="map-popup">
                <SpkLeaflet
                  position={center}
                  Zoom={13}
                  scrollWheel={true}
                  Customclass="ht-300 circle-map"
                  Id="leaflet2"
                  MarkerpathOptions={redOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Interactive Choropleth Map</div>
            </div>
            <div className="card-body">
              <div id="interactive-map">
                <SpkLeaflet
                  position={position}
                  Zoom={13}
                  scrollWheel={true}
                  Customclass="mapleaflet ht-300"
                  Id="interactive-map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Leafletmaps;
