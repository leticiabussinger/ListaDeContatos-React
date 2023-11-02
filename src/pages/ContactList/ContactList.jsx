import React from 'react';
import {
  ButtonClear,
  ButtonSave,
  ButtonsContainer,
  Contacts,
  Container,
  ContainerList,
  FormList,
  MessageError,
  TitleContactList,
} from './styled';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Input/Checkbox';
import Contact from '../../components/Contact/Contact';
import { GlobalStyleContactList } from '../../global/globalStyle';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerAccordion } from '../../components/Contact/styled';
import { api } from '../../api/api';

const ContactList = () => {
  const [nome, setNome] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [telefoneFormatado, setTelefoneFormatado] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState(false);
  const [observacoes, setObservacoes] = React.useState('');
  const [contacts, setContacts] = React.useState([]);
  const [editContactAtualId, setEditContactAtualId] = React.useState(0);
  const [errorSave, setErrorSave] = React.useState(false);

  const getContatos = () => {
    console.log('Fez');
    api.get('/contatos').then((r) => {
      setContacts(r.data);
    });
  };

  React.useEffect(() => {
    getContatos();
  }, []);

  const saveContact = (e) => {
    e.preventDefault();
    let objIndex = -1;
    const newArr = [...contacts];

    if (editContactAtualId != 0) {
      objIndex = newArr.findIndex((c) => c.id == editContactAtualId);
    }

    if (
      nome != '' &&
      telefone != '' &&
      telefone.length == 11 &&
      editContactAtualId == 0
    ) {
      saveNormal(e);
      setErrorSave(false);
      setTimeout(() => {
        getContatos();
      }, 300);
    } else if (
      nome != '' &&
      telefone != '' &&
      editContactAtualId != 0 &&
      objIndex != -1
    ) {
      saveEdit(e);
      setErrorSave(false);
      setTimeout(() => {
        getContatos();
      }, 500);
    } else {
      setErrorSave(true);
    }
  };

  const formatPhoneNumber = (value) => {
    const numericValue = value.replace(/\D/g, '');

    const limitedValue = numericValue.slice(0, 11);

    let formattedValue = '';
    for (let i = 0; i < limitedValue.length; i++) {
      if (i === 0) {
        formattedValue += `(${limitedValue[i]}`;
      } else if (i === 2) {
        formattedValue += `) ${limitedValue[i]}`;
      } else if (i === 7) {
        formattedValue += `-${limitedValue[i]}`;
      } else {
        formattedValue += limitedValue[i];
      }
    }

    return formattedValue;
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);

    setTelefone(formattedValue.replace(/\D/g, ''));
    setTelefoneFormatado(formattedValue);
  };

  const saveEdit = (e) => {
    api.put(`/contatos/${editContactAtualId}`, {
      nome,
      telefone,
      whatsapp,
      observacoes,
    });
    limparForm(e);
  };

  const saveNormal = (e) => {
    api.post('/contatos', {
      nome,
      telefone,
      whatsapp,
      observacoes,
    });
    limparForm(e);
  };

  const limparForm = (e) => {
    e.preventDefault();
    setNome('');
    setTelefone('');
    setWhatsapp(false);
    setObservacoes('');
    setEditContactAtualId(0);
    setErrorSave(false);
    setTelefoneFormatado('');
  };

  const deleteContact = (id, event) => {
    api.delete(`/contatos/${id}`);
    setTimeout(() => {
      getContatos();
    }, 300);
    if (id == editContactAtualId) {
      limparForm(event);
    }
  };
  const editContact = (id, nome, telefone, whatsapp, observacoes) => {
    setNome(nome);
    setTelefone(telefone);
    setWhatsapp(whatsapp);
    setObservacoes(observacoes);
    setEditContactAtualId(id);
    const formattedValue = formatPhoneNumber(telefone);
    setTelefoneFormatado(formattedValue);
  };

  return (
    <Container>
      <ContainerList>
        <TitleContactList>Lista de Contatos</TitleContactList>
        <GlobalStyleContactList />
        <FormList>
          {nome == '' && errorSave ? (
            <Input
              id="nome"
              label="Nome Completo"
              value={nome}
              erro={errorSave}
              onChange={(e) => setNome(e.target.value)}
            />
          ) : (
            <Input
              id="nome"
              label="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          )}
          {telefone.length != 11 && errorSave ? (
            <Input
              id="telefone"
              label="Telefone"
              value={telefoneFormatado}
              erro={errorSave}
              maxLength={15}
              placeholder="(xx) xxxxx-xxxx"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <Input
              id="telefone"
              label="Telefone"
              value={telefoneFormatado}
              maxLength={15}
              placeholder="(xx) xxxxx-xxxx"
              onChange={(e) => handleChange(e)}
            />
          )}
          <Input
            id="observacoes"
            label="Observações (Opcional)"
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
          />
          <Checkbox
            id="whatsapp"
            label="Possui Whatsapp?"
            checked={whatsapp}
            onChange={() => setWhatsapp(!whatsapp)}
          />
          {errorSave && (
            <MessageError>
              Por favor, preencha todos os campos obrigatórios corretamente.
            </MessageError>
          )}
          <ButtonsContainer>
            <ButtonClear onClick={limparForm}>Limpar</ButtonClear>
            <ButtonSave onClick={saveContact}>Salvar</ButtonSave>
          </ButtonsContainer>
        </FormList>
        <Contacts>
          {contacts.length == 0 ? <h3>Nenhum Contato</h3> : <h3>Contatos</h3>}
          <ContainerAccordion>
            <Accordion>
              {contacts.map((c) => (
                <Contact
                  key={c.id}
                  formatarTelefone={formatPhoneNumber}
                  deleteContact={deleteContact}
                  editContact={editContact}
                  contact={c}
                />
              ))}
            </Accordion>
          </ContainerAccordion>
        </Contacts>
      </ContainerList>
    </Container>
  );
};

export default ContactList;
