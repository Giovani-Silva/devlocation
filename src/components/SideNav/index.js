import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';
import Item from './MenuItem';

const renderItems = ({ users }) =>
  users.map(user => <Item key={user.id} user={user} />);

const SideNav = props => <Container> {renderItems(props)} </Container>;

const mapStateToProps = state => ({
  users: state.maps.users
});
export default connect(mapStateToProps)(SideNav);
