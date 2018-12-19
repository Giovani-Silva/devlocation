import React from 'react';

import { Container } from './styles';

const handleAddUser = event => event.preventDefault();

const AddDev = () => (
  <Container>
    <form onSubmit={handleAddUser}>
      <h2>Adicionar novo usuário</h2>
      <input type="text" placeholder="usurname on github" />
      <div>
        <button type="button">Cancelar</button>
        <button type="submit">Salvar</button>
      </div>
    </form>
  </Container>
);

export default AddDev;
