import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import {
  Container,
  Header,
  Body,
  Image,
  Footer,
  Button,
  IconContainer,
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
        <h2>{employee.name}</h2>
        <p>{employee.secondName}</p>
      </Body>
      <Footer>
        <IconContainer>
          <Button type="button" onClick={() => setEditingEmployee()}>
            <FiEdit3 size={20} />
          </Button>

          <Button type="button" onClick={() => handleDelete(employee.id)}>
            <FiTrash size={20} />
          </Button>
        </IconContainer>
      </Footer>
    </Container>
  );
};

export default Employee;
