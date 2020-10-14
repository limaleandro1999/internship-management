import React from 'react';
import { List, Datagrid, TextField, TextInput, EditButton, ShowButton, Filter } from 'react-admin';

function CourseFilters(props) {
  return (
    <Filter {...props}>
      <TextInput label='Pesquisa' source='q' alwaysOn/>
    </Filter>
  );
}

function CourseList(props) {
  return (
    <List {...props} title='Course' filters={<CourseFilters/>}>
      <Datagrid>
        <TextField source='name' label='Nome'/>
        <TextField source='code' label='Código'/>
        <EditButton/>
        <ShowButton/>
      </Datagrid>
    </List>
  );
}

export default CourseList;