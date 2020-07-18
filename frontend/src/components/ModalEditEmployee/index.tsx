import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form, Button, Text, Icon, Title } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IEmployee, IEditEmployee } from '../../interfaces';
interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateEmployee: (employee: IEditEmployee, id: number) => void;
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
      handleUpdateEmployee(data, editingEmployee._id);
    },
    [setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingEmployee}>
        <Title>Editar Funcionário</Title>
        <Input name="image" placeholder="url da foto" />
        <Input name="name" placeholder="Nome" />

        <Input name="secondName" placeholder="Sobrenome" />
        <Input name="role.description" placeholder="Cargo" />

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
