import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Item from './MenuItem';

const renderItems = ({ users }) => {
  console.log();
  if (!users.length) {
    return (
      <div className="no-users">
        <strong> :( Nenhum usuário cadastrado</strong>
        <small>Clique no mapa para adicionar um novo usuário</small>
      </div>
    );
  }
  return users.map(user => <Item key={user.id} user={user} />);
};

const SideNav = props => <Container> {renderItems(props)} </Container>;

SideNav.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  ).isRequired
};
const mapStateToProps = state => ({
  users: state.maps.users
});
export default connect(mapStateToProps)(SideNav);
