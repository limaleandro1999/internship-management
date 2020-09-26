import React from 'react';
import { Edit, SimpleForm, TextInput, required, email } from 'react-admin';

const validateName = required('O campo nome é obrigatório');
const validateEmail = [required('O campo email é obrigatório'), email('Email inválido')];

function CampiAdminEdit(props) {
  return (
    <Edit {...props} title='Novo Campus'>
      <SimpleForm>
        <TextInput source='name' label='Nome' fullWidth={true} validate={validateName}/>
        <TextInput source='email' label='Email' fullWidth={true} validate={validateEmail}/>
      </SimpleForm>
    </Edit>
  );
}

export default CampiAdminEdit;