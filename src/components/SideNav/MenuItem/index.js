import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MapActions } from '../../../store/ducks/maps';
import { Container } from './styles';

const handleRemoveUser = (user, props) => {
  props.removeUserRequest(user);
  // console.log('handleRemoveUser', MapActions.removeUserRequest(user));
};
const Item = props => {
  const { user } = props;
  return (
    <Container>
      <img src={user.avatar_url} alt="avatar" />
      <div>
        <strong>{user.name}</strong>
        <small>{user.username}</small>
      </div>
      <button type="button" onClick={e => handleRemoveUser(user, props)}>
        <i className="fa fa-trash" />
      </button>
      <button type="button">
        <i className="fa fa-chevron-right" />
      </button>
    </Container>
  );
};

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
export default connect(
  null,
  mapDispatchToProps
)(Item);
