import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  button {
    margin-block: 20px;
    cursor: pointer;
  }
`;
