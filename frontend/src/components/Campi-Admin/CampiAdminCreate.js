import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, required, email } from 'react-admin';

const validateName = required('O campo nome é obrigatório');
const validateEmail = [required('O campo email é obrigatório'), email('Email inválido')];

function CampiAdminCreate(props) {
  return (
    <Create {...props} title='Novo Campus'>
      <SimpleForm>
        <TextInput source='name' label='Nome' fullWidth={true} validate={validateName}/>
        <TextInput source='email' label='Email' fullWidth={true} validate={validateEmail}/>
        <ReferenceInput source='campus' label='Campus' reference='campi'>
          <SelectInput optionText='name' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}

export default CampiAdminCreate;