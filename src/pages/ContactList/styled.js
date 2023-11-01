import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const TitleContactList = styled.h1`
  font-size: 40px;
  text-align: center;
  padding-top: 40px;
`;

export const ContainerList = styled.div`
  width: 60%;
  margin: 16vh auto 16vh auto;

  /* From https://css.glass */
  background: rgba(192, 189, 189, 0.16);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
`;
export const FormList = styled.form`
  padding: 30px 40px 10px 40px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 10px;
`;
export const ButtonSave = styled.button`
  padding: 8px;
  background-color: #ee8b00;
  border: 1px solid #ccc;
  color: #1e90ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  min-width: 83px;
`;
export const ButtonClear = styled.button`
  padding: 8px;
  background-color: whitesmoke;
  border: 1px solid #ee8b00;
  color: #ee8b00;
  border-radius: 5px;
  cursor: pointer;
  min-width: 83px;
`;
export const Contacts = styled.div`
  padding: 0 40px 30px 40px;
  h3 {
    margin: 20px 0;
    text-align: center;
    font-size: 30px;
    line-height: 34px;
  }
`;

const textExpand = keyframes`
  0% { font-size: 0 }
  100% { font-size: inicial }
`;

export const MessageError = styled.p`
  color: 'white';
  text-align: end;
  font-size: 1.2rem;
  font-weight: 500;
  animation: ${textExpand} 0.5s ease forwards;
`;
