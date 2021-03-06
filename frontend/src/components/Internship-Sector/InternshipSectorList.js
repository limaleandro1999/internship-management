import React from 'react';
import { List, Datagrid, TextField, TextInput, EditButton, ShowButton, Filter } from 'react-admin';

function InternshipSectorFilters(props) {
  return (
    <Filter {...props}>
      <TextInput label='Pesquisa' source='q' alwaysOn/>
    </Filter>
  );
}

function InternshipSectorList(props) {
  return (
    <List {...props} title='Campus Admin' filters={<InternshipSectorFilters/>}>
      <Datagrid>
        <TextField source='firstName' label='Nome'/>
        <TextField source='lastName' label='Sobrenome'/>
        <TextField source='user.email' label='Email'/>
        <EditButton/>
        <ShowButton/>
      </Datagrid>
    </List>
  );
}

export default InternshipSectorList;