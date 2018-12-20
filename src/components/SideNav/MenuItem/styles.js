import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 139px;
  max-height: 160px;
  background: rgba(255, 255, 255, 0.65);
  border-bottom: 1px solid #ededed;
  img {
    height: 56px;
    border-radius: 50%;
  }
  div {
    /* flex: 1; */
    width: 200px;
    display: flex;
    padding: 0 5px;
    flex-direction: column;
    strong {
      font-size: 1.1rem;
    }
    small {
      color: #999;
    }
  }
  a {
    color: transparent;
    i.fa {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      margin: 0 5px;
      &.fa-trash {
        background: crimson;
        color: whitesmoke;
        &:hover {
          opacity: 0.8;
        }
      }
      &.fa-chevron-right {
        color: silver;
        &:hover {
          background: #f5f5f5;
        }
      }
    }
  }
`;
