import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container, Body, Footer, Button, TextInfo } from './styles';

import { IRole } from '../../interfaces';

interface IProps {
  role: IRole;
  handleDelete: (id: number) => {};
  handleEditRole: (role: IRole) => void;
}

const Role: React.FC<IProps> = ({
  role,
  handleDelete,
  handleEditRole,
}: IProps) => {
  function setEditingRole(): void {
    handleEditRole(role);
  }

  return (
    <Container>
      <Body>
        <TextInfo>Descrição: {role.description}</TextInfo>
      </Body>
      <Footer>
        <Button type="button" onClick={() => setEditingRole()}>
          <FiEdit3 size={15} />
        </Button>

        <Button type="button" onClick={() => handleDelete(role._id)}>
          <FiTrash size={15} />
        </Button>
      </Footer>
    </Container>
  );
};

export default Role;
