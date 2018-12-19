import React from 'react';
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

export default Item;
