import React from 'react';

import { lifecycle } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';

const MyGoogleMap = withScriptjs(
  withGoogleMap(
    lifecycle({
      componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route(
          {
            origin: new google.maps.LatLng(59.9181167, 30.4542344),
            destination: new google.maps.LatLng(59.9277863, 30.3455815),
            travelMode: google.maps.TravelMode.TRANSIT,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            }
          },
        );
      },
    })(props => (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(59.9181167, 30.4542344)}
      >
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        )}
      </GoogleMap>
    )),
  ),
);

export default MyGoogleMap;
