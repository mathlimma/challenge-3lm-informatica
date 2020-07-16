import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import {
  Container,
  Header,
  Body,
  Image,
  Footer,
  Button,
  TextName,
  TextDescription,
  TextInfo,
} from './styles';

interface IEmployee {
  id: number;
  image: string;
  name: string;
  secondName: string;
  role: IRole;
  birth: string;
  salary: boolean;
}

interface IRole {
  description: string;
}

interface IProps {
  employee: IEmployee;
  handleDelete: (id: number) => {};
  handleEditEmployee: (employee: IEmployee) => void;
}

const Employee: React.FC<IProps> = ({
  employee,
  handleDelete,
  handleEditEmployee,
}: IProps) => {
  function setEditingEmployee(): void {
    // TODO - SET THE ID OF THE CURRENT ITEM TO THE EDITING FOOD AND OPEN MODAL
  }

  return (
    <Container>
      <Header>
        <Image src={employee.image} alt={Employee.name} />
      </Header>
      <Body>
        <TextName>{`${employee.name} ${employee.secondName}`}</TextName>
        <TextDescription>{employee.role.description}</TextDescription>
        <TextInfo>Salário: {employee.salary}</TextInfo>
        <TextInfo>Data de Nascimento: {employee.birth}</TextInfo>
      </Body>
      <Footer>
        <Button type="button" onClick={() => setEditingEmployee()}>
          <FiEdit3 size={20} />
        </Button>

        <Button type="button" onClick={() => handleDelete(employee.id)}>
          <FiTrash size={20} />
        </Button>
      </Footer>
    </Container>
  );
};

export default Employee;
