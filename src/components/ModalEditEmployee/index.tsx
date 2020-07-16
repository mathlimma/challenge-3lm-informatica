import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form, Button, Text, Icon, Title } from './styles';
import Modal from '../Modal';
import Input from '../Input';

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

interface IEditEmployee {
  name: string;
  image: string;
  secondName: string;
  role: string;
  birth: string;
  salary: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateEmployee: (employee: IEmployee) => void;
  editingEmployee: IEmployee;
}

const ModalEditEmployee: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingEmployee,
  handleUpdateEmployee,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditEmployee) => {
      // EDIT A FOOD PLATE AND CLOSE THE MODAL
    },
    [setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingEmployee}>
        <Title>Editar Funcionário</Title>
        <Input name="name" placeholder="Nome" />

        <Input name="secondName" placeholder="Sobrenome" />
        <Input name="role" placeholder="Cargo" />

        <Input name="birth" placeholder="Data de Nascimento" />
        <Input name="salary" placeholder="Salário" />

        <Button type="submit">
          <Text>Editar Funcionário</Text>
          <Icon>
            <FiCheckSquare size={24} />
          </Icon>
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalEditEmployee;
