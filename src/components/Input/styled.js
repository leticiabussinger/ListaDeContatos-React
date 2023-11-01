import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 5px;
  }
  input:focus {
    outline-color: #646464;
    outline-width: 2px;
    outline-style: solid;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 5px;
  label {
    order: 1;
  }
  input {
    accent-color: green;
    width: 20px;
  }
`;

export const InputStyled = styled.input`
  padding: 10px;
  border-width: 3px;
  border-radius: 4px;
  background-color: #dcdcdc;
  border-color: ${(props) =>
    props.colorerro == 'true' ? '#C93333' : 'transparent'};
`;
