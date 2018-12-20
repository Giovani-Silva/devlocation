import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Item = ({ user }) => (
  <Container>
    <img src={user.avatar_url} alt="user avatar" />
    <div>
      <strong>{user.name}</strong>
      <small>{user.username}</small>
    </div>
    <a href="#">
      <i className="fa fa-trash" />
    </a>
    <a href="#">
      <i className="fa fa-chevron-right" />
    </a>
  </Container>
);

Item.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired
};
export default Item;
