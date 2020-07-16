import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form, Button, Icon, Text, Title } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IEmployee {
  id: number;
  name: string;
  secondName: string;
  role: string;
  birth: string;
  salary: boolean;
}

interface IRole {
  description: string;
}

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
    // TODO ADD A NEW FOOD AND CLOSE THE MODAL
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Title>Novo Funcionario</Title>
        <Input name="name" placeholder="Nome" />

        <Input name="secondName" placeholder="Sobrenome" />
        <Input name="role" placeholder="Cargo" />

        <Input name="birth" placeholder="Data de Nascimento" />
        <Input name="salary" placeholder="Salário" />

        <Button type="submit" data-testid="add-food-button">
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
