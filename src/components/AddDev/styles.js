import styled from 'styled-components';

export const Fade = styled.div`
  position: absolute;
  z-index: 100000;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease 0.5 s;
`;
export const Container = styled.div`
  padding: 20px;
  background: white;
  width: 450px;
  height: 280px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

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
        background: #868585;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity ease 0.5s;
        &:hover {
          opacity: 1;
        }

        &:nth-child(2) {
          background: #15a01a;
        }
      }
    }
  }
`;
