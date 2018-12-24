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
  const renderNotify = () => {
    if (!!state.msg.error) {
      toast.error(state.msg.error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    if (!!state.msg.success) {
      toast.success(state.msg.success, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };
  return (
    <Fragment>
      {/* {state.msg} */}
      {!!state.msg.success && renderNotify()}
      {!!state.msg.error && renderNotify()}
      <ToastContainer />
      <Menu />
      <Map />
      {!!state.adding && <AddDev />}
    </Fragment>
  );
};
Main.defaultProps = {
  adding: false,
  msg: PropTypes.shape({
    success: null,
    error: null
  })
};
Main.propTypes = {
  state: PropTypes.shape({
    adding: PropTypes.bool,
    msg: PropTypes.shape({
      success: PropTypes.string,
      error: PropTypes.string
    })
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
