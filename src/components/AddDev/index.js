import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Container, Fade } from './styles';
import { Creators as MapActions } from '../../store/ducks/maps';

class AddDev extends Component {
  state = {
    InputUsername: ''
  };

  static proptypes = {
    state: PropTypes.shape({
      adding: PropTypes.bool,
      loading: PropTypes.bool,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar_url: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired
        })
      ).isRequired,
      viewport: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
      }).isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
      }).isRequired
    })
  };

  handleAddUser = e => {
    e.preventDefault();
    this.props.addUserRequest(
      this.state.InputUsername,
      this.props.state.location.longitude,
      this.props.state.location.latitude
    );
    this.setState({ InputUsername: '' });
    this.props.setOpenModal();
  };

  handleCancelClick = () => {
    this.props.setOpenModal();
  };
  render() {
    return (
      <Fade>
        <Container>
          <h2>Adicionar novo usuário</h2>
          <form onSubmit={this.handleAddUser}>
            <input
              autoFocus
              type="text"
              placeholder="Usuário do GitHub"
              onChange={e => this.setState({ InputUsername: e.target.value })}
            />
            <div>
              <button
                type="button"
                onClick={() => {
                  this.handleCancelClick(this.props);
                }}
              >
                Cancelar
              </button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </Container>
      </Fade>
    );
  }
}
const mapStateToProps = state => ({
  state: state.maps
});
const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDev);
