import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  height: 75vh;
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  transform: translateY(-50%);
  border-radius: 10px;
  overflow-x: hidden;
  box-shadow: 0px 4px 15px -5px rgba(0, 0, 0, 0.65);

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    border-radius: 15px;
    height: 90%;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;
