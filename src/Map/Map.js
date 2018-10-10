import React from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import { connect } from 'react-redux';

import { mapViewChanged } from '../store/map';

const flyTransitionInetrpolator = new FlyToInterpolator();

const Map = ({ viewport, mapChange }) => (
  <ReactMapGL
    {...viewport}
    onViewportChange={mapChange}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    transitionInterpolator={flyTransitionInetrpolator}
  />
);

const mapStateToProps = ({ map }) => ({
  viewport: map,
});

const mapDispatchToProps = (dispatch) => ({
  mapChange: (viewport) => dispatch(mapViewChanged(viewport)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);