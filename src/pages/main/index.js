import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Map from '../../components/Map';
import Menu from '../../components/SideNav';
import AddDev from '../../components/AddDev';
import { Creators as MapActions } from '../../store/ducks/maps';

const Main = props => {
  const { state } = props;

  if (!!state.msg.error) {
    props.clearMessages();
    toast.error(state.msg.error, {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  const renderNotify = () => {
    if (!!state.msg.error) {
      toast.error(state.msg.error, {
        position: toast.POSITION.TOP_RIGHT
      });
      props.clearMessages();
    }
    if (!!state.msg.success) {
      toast.success(state.msg.success, {
        position: toast.POSITION.TOP_RIGHT
      });
      props.clearMessages();
    }
  };
  return (
    <Fragment>
      <ToastContainer />
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

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
