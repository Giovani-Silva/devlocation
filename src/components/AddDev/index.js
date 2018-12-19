import React from 'react';

import { Container, Fade } from './styles';

const handleAddUser = event => event.preventDefault();

const AddDev = () => (
  <Fade>
    <Container>
      <h2>Adicionar novo usuário</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" placeholder="Usuário do GitHub" />
        <div>
          <button type="button">Cancelar</button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </Container>
  </Fade>
);

export default AddDev;
