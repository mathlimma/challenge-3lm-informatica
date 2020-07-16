import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import EmployeeItem from '../../components/Employee';
import ModalAddEmployee from '../../components/ModalAddEmployee';
import ModalEditEmployee from '../../components/ModalEditEmployee';

import { Container } from './styles';

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

const Dashboard: React.FC = () => {
  const [Employee, setEmployee] = useState<IEmployee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<IEmployee>(
    {} as IEmployee,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadEmployees(): Promise<void> {
      // TODO LOAD FOODS
    }

    loadEmployees();
  }, []);

  async function handleAddEmployee(employee: IEmployee): Promise<void> {
    try {
      // TODO ADD A NEW FOOD PLATE TO THE API
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateEmployee(employee: IEmployee): Promise<void> {
    // TODO UPDATE A FOOD PLATE ON THE API
  }

  async function handleDeleteEmployee(id: number): Promise<void> {
    // TODO DELETE A FOOD PLATE FROM THE API
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditEmployee(employee: IEmployee): void {
    // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddEmployee
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddEmployee={handleAddEmployee}
      />
      <ModalEditEmployee
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingEmployee={editingEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
      />

      <Container>
        {Employee &&
          Employee.map(Employee => (
            <EmployeeItem
              key={Employee.id}
              employee={Employee}
              handleDelete={handleDeleteEmployee}
              handleEditEmployee={handleEditEmployee}
            />
          ))}
      </Container>
    </>
  );
};

export default Dashboard;
