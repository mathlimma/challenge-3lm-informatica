import React, { useRef, useCallback, useState } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form, Button, Icon, Text, Title, Select, Option } from './styles';
import Modal from '../Modal';
import Input from '../Input';

import { IEmployee, IRole } from '../../interfaces';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddEmployee: (employee: IEmployee) => void;
  roles: IRole[];
}

const ModalAddEmployee: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddEmployee,
  roles,
}) => {
  const formRef = useRef<FormHandles>(null);
  const selectedRef = useRef(null);

  const [selectedRole, setSelectedRole] = useState();
  const handleSubmit = useCallback(async data => {
    const role2 = formRef;
    data = {
      ...data,
      role: 'selectedRef.current.value',
    };
    console.log(formRef);
    console.log(data);

    //handleAddEmployee(data);
  }, []);
  function handleChange(e: any) {
    setSelectedRole(e.target.value);
    console.log(selectedRole);
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} id={'employeeForm'}>
        <Title>Novo Funcionario</Title>

        <Input name="image" placeholder="url da foto" />
        <Input name="name" placeholder="Nome*" />

        <Input name="secondName" placeholder="Sobrenome*" />

        <Select
          disabled={roles.length === 0}
          onChange={handleChange}
          name="description"
          ref={selectedRef}
          value={selectedRole}
        >
          {roles &&
            roles.map(role => (
              <Option key={role._id} value={role._id}>
                {role.description}
              </Option>
            ))}
        </Select>

        <Input name="birth" placeholder="Data de Nascimento*" />
        <Input name="salary" placeholder="Salário*" />

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
