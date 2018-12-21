import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';

import { Creators as MapActions } from '../../store/ducks/maps';

class Map extends Component {
  static proptypes = {
    state: PropTypes.shape({
      adding: PropTypes.bool,
      loading: PropTypes.bool,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar_url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired
        })
      ).isRequired,
      viewport: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
      }).isRequired
    })
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.props.resizeMap({
      ...this.props.state.viewport,
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat;
    this.props.addUserLocation(longitude, latitude);
    this.props.setOpenModal();
    console.log(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  renderMap = () =>
    this.props.state.users.map(user => (
      <Marker
        longitude={user.longitude}
        latitude={user.latitude}
        onClick={this.handleMapClick}
        captureClick={true}
        key={user.id}
      >
        <img
          style={{
            borderRadius: 100,
            width: 48,
            height: 48,
            boxShadow: '0px 2px 7px #00000096',
            padding: 5
          }}
          src={user.avatar_url}
          alt="avatar"
        />
      </Marker>
    ));

  render() {
    return (
      <MapGL
        {...this.props.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={
          'pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ'
        }
        onViewportChange={viewport => this.props.resizeMap({ ...viewport })}
      >
        {this.renderMap()}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  state: state.maps
});
const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
