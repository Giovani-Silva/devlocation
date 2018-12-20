import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MapActions } from '../../../store/ducks/maps';
import { Container } from './styles';

const handleRemoveUser = (user, props) => {
  MapActions.removeUserRequest(user);
};
const Item = ({ user }) => (
  <Container>
    <img src={user.avatar_url} alt="user avatar" />
    <div>
      <strong>{user.name}</strong>
      <small>{user.username}</small>
    </div>
    <a href="#" onClick={() => handleRemoveUser(user)}>
      <i className="fa fa-trash" />
    </a>
    <a href="#">
      <i className="fa fa-chevron-right" />
    </a>
  </Container>
);

Item.defaultProps = {
  user: PropTypes.shape({
    name: 'Não informado'
  })
};
Item.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    username: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);
export default connect(mapDispatchToProps)(Item);
