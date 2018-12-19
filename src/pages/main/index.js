import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';
import Menu from '../../components/SideNav';
import AddDev from '../../components/AddDev';

const Main = ({ state }) => {
  console.log(state);
  return (
    <Fragment>
      {!!state.maps.adding && <AddDev />}
      <Menu />
      <Map />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(Main);
