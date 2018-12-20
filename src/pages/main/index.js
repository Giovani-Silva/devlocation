import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Map from '../../components/Map';
import Menu from '../../components/SideNav';
import AddDev from '../../components/AddDev';

const Main = ({ state }) => {
  console.tron.log(state);
  return (
    <Fragment>
      <Menu />
      <Map />
      {!!state.adding && <AddDev />}
    </Fragment>
  );
};

Main.defaultProps = {
  adding: false
};
Main.propTypes = {
  state: PropTypes.shape({
    adding: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({
  state: state.maps
});
export default connect(mapStateToProps)(Main);
