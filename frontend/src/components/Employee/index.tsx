import React from 'react';

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

import { IEmployee } from '../../interfaces';

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
    handleEditEmployee(employee);
  }

  const image = employee.image
    ? employee.image
    : 'https://img2.gratispng.com/20180603/jx/kisspng-user-interface-design-computer-icons-default-stephen-salazar-photography-5b1462e1b19d70.1261504615280626897275.jpg';

  return (
    <Container>
      <Header>
        <Image src={image} alt={Employee.name} />
      </Header>
      <Body>
        <TextName>{`${employee?.name} ${employee?.secondName}`}</TextName>
        <TextDescription>{employee?.role?.description}</TextDescription>
        <TextInfo>Salário R$ : {employee?.salary}</TextInfo>
        <TextInfo>Data de Nascimento: {employee?.birth}</TextInfo>
      </Body>
      <Footer>
        <Button type="button" onClick={() => setEditingEmployee()}>
          <FiEdit3 size={20} />
        </Button>

        <Button type="button" onClick={() => handleDelete(employee._id)}>
          <FiTrash size={20} />
        </Button>
      </Footer>
    </Container>
  );
};

export default Employee;
