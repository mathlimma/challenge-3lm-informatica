import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form, Button, Icon, Text, Title } from './styles';
import Modal from '../Modal';
import Input from '../Input';

import { IEmployee } from '../../interfaces';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddEmployee: (employee: IEmployee) => void;
}

const ModalAddEmployee: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddEmployee,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    handleAddEmployee(data);
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Title>Novo Funcionario</Title>

        <Input name="image" placeholder="url da foto" />
        <Input name="name" placeholder="Nome" />

        <Input name="secondName" placeholder="Sobrenome" />
        <Input name="role" placeholder="Cargo" />

        <Input name="birth" placeholder="Data de Nascimento" />
        <Input name="salary" placeholder="Salário" />

        <Button type="submit">
          <Text>Adicionar Funcionário</Text>
          <Icon>
            <FiCheckSquare size={24} />
          </Icon>
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalAddEmployee;
