import styled from 'styled-components';

export const ContainerAccordion = styled.div`
  .accordion-item {
    margin-bottom: 20px;
    background-color: #dcdcdc;
    border: none;
  }
  .accordion-button {
    background-color: #dcdcdc;
  }
  .accordion-button:not(.collapsed) {
    background-color: #a0a0a0;
    box-shadow: none;
    color: black;
  }
  .accordion-button:focus {
    box-shadow: none;
  }
`;
export const ContainerAccordionBody = styled.div`
  display: flex;
  flex-direction: column;
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 10px;

  img {
    width: 25px;
    cursor: pointer;
  }
`;
