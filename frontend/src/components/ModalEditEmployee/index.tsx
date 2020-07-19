import React, { useRef, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form, Button, Text, Icon, Title, Select, Option } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IEmployee, IEditEmployee, IRole } from '../../interfaces';
interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateEmployee: (employee: IEditEmployee, id: number) => void;
  editingEmployee: IEmployee;
  roles: IRole[];
}

const ModalEditEmployee: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingEmployee,
  handleUpdateEmployee,
  roles,
}) => {
  const formRef = useRef<FormHandles>(null);

  const [selectedRole, setSelectedRole] = useState();
  const selectedRef = useRef(null);

  function handleSubmit(data: any, { reset }: any) {
    data = {
      ...data,
      role: selectedRole,
    };
    handleUpdateEmployee(data, editingEmployee._id);

    reset();
  }

  function handleChange(e: any) {
    setSelectedRole(e.target.value);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingEmployee}>
        <Title>Editar Funcionário</Title>
        <Input name="image" placeholder="url da foto" />
        <Input name="name" placeholder="Nome" />

        <Input name="secondName" placeholder="Sobrenome" />

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
