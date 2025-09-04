import  React, { FC, Fragment } from 'react'
import Pageheader from '../../../components/page-header/pageheader';
import GoogleMapReact from 'google-map-react';
import { Card } from 'react-bootstrap';

interface MarkerProps {
    lat: number;
    lng: number;
    text: string;
}

const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => (
    <div>
      {text}
    </div>
  );

interface GooglemapsProps {}

const Googlemaps: FC<GooglemapsProps> = () =>{
    
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  ///
  const customStyles = [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#ebe3cd" }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#523735" }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#f5f1e6" }]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#c9b2a6" }]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#dcd2be" }]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#ae9e90" }]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [{ "color": "#dfd2ae" }]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{ "color": "#dfd2ae" }]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#93817c" }]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [{ "color": "#a5b076" }]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#447530" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#f5f1e6" }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{ "color": "#fdfcf8" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{ "color": "#f8c967" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#e9bc62" }]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [{ "color": "#e98d58" }]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [{ "color": "#db8555" }]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#806b63" }]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{ "color": "#dfd2ae" }]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#8f7d77" }]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#ebe3cd" }]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{ "color": "#dfd2ae" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{ "color": "#b9d3c2" }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#92998d" }]
    }
  ];
  
  return (
    <Fragment>
       
         <Pageheader title="Maps" currentpage="Google Maps" activepage="Google Maps" />
            <Card className="custom-card">
                <Card.Header className="">
                    <Card.Title>Google Map</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div style={{ height: '400px', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA" }}
                                defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom} >
                                <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                            </GoogleMapReact>
                        </div>
                </Card.Body>
            </Card>
            <Card className="custom-card">
                <Card.Header className="">
                    <Card.Title>Los Angeles Map</Card.Title>
                </Card.Header>
                <Card.Body>
                        <div style={{ height: "400px", width: "100%" }}>
                            <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA" }}
                                    defaultCenter={{ lat: 34.052235, lng: -118.243683 }}  // New York City
                                defaultZoom={12}  // Different zoom level
                                options={{ styles: customStyles }}  // Apply different styling
                            >
                            <AnyReactComponent lat={40.73061} lng={-73.935242} text="New Marker" />
                            </GoogleMapReact>

                        </div>
                </Card.Body>
            </Card>
    </Fragment>
  )
}

export default Googlemaps

