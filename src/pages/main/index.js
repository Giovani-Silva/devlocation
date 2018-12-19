import React, { Fragment } from 'react';
import Map from '../../components/Map';
import Menu from '../../components/SideNav';
import AddDev from '../../components/AddDev';
const Main = () => (
  <Fragment>
    <AddDev />
    <Menu />
    <Map />
  </Fragment>
);

export default Main;
