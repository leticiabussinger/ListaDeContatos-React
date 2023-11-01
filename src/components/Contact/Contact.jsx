// eslint-disable-next-line no-unused-vars
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerAccordionBody, IconsContainer } from './styled';
import IconEdit from '../../assets/icons/iconEdit.png';
import IconDelete from '../../assets/icons/iconDelete.png';

const Contact = ({ contact, deleteContact, editContact, formatarTelefone }) => {
  const { id, nome, telefone, whatsapp, observacoes } = contact;

  const formattedValue = formatarTelefone(telefone);

  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header>{nome}</Accordion.Header>
      <Accordion.Body>
        <ContainerAccordionBody>
          <p>Telefone: {formattedValue}</p>
          <p>Possui Whatsapp: {whatsapp ? 'Sim' : 'Não'}</p>
          {observacoes != '' ? (
            <p>Observações: {observacoes} </p>
          ) : (
            <p>Observações: Nenhuma Observação</p>
          )}
          <IconsContainer>
            <img
              src={IconEdit}
              onClick={() =>
                editContact(id, nome, telefone, whatsapp, observacoes)
              }
              alt="Icone Editar"
            />
            <img
              src={IconDelete}
              onClick={(event) => deleteContact(id, event)}
              alt="Icone Excluir"
            />
          </IconsContainer>
        </ContainerAccordionBody>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Contact;
