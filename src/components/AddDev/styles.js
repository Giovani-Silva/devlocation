import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    padding: 20px;
    background: white;
    width: 450px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    input {
      width: 100%;
      height: 50px;
      padding: 20px;
      color: #9e9e9e;
      font-size: 1.2rem;
      font-weight: 700;
      margin: 10px 0;
      border-radius: 10px;
      border: 1px solid #9e9e9e;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      button {
        border: none;
        height: 50px;
        width: 49%;
        border-radius: 10px;
        font-size: 1.4rem;
        font-weight: 700;
        color: white;
        background: #9e9e9e;
        cursor: pointer;

        &:nth-child(2) {
          background: #4caf50;
        }
      }
    }
  }
`;
