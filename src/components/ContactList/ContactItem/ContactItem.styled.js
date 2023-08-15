import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;

  button {
    height: 35px;
    cursor: pointer;
  }

  button:is(:hover, :focus) {
    background-color: #ff8585;
  }
`;
