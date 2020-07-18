import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import EmployeeItem from '../../components/Employee';
import ModalAddEmployee from '../../components/ModalAddEmployee';
import ModalEditEmployee from '../../components/ModalEditEmployee';
import { Creators as EmployeeActions } from '../../store/ducks/employee';
import { IEmployee, IEditEmployee, IRootState } from '../../interfaces';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [editingEmployee, setEditingEmployee] = useState<IEmployee>(
    {} as IEmployee,
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const {
    getEmployeesRequest,
    addEmployeeRequest,
    updateEmployeeRequest,
    deleteEmployeeRequest,
  } = EmployeeActions;
  const { employees } = useSelector((state: IRootState) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadEmployees(): Promise<void> {
      dispatch(getEmployeesRequest());
    }
    loadEmployees();
  }, []);

  async function handleAddEmployee(employee: IEmployee): Promise<void> {
    dispatch(addEmployeeRequest(employee));
    toggleModal();
  }

  async function handleUpdateEmployee(
    employee: IEditEmployee,
    id: number,
  ): Promise<void> {
    dispatch(updateEmployeeRequest(employee, id));
    toggleEditModal();
  }

  async function handleDeleteEmployee(id: number): Promise<void> {
    dispatch(deleteEmployeeRequest(id));
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditEmployee(employee: IEmployee): void {
    setEditingEmployee(employee);
    toggleEditModal();
  }

  return (
    <Container>
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
      <Content>
        {employees &&
          employees.map(employee => (
            <EmployeeItem
              key={employee._id}
              employee={employee}
              handleDelete={handleDeleteEmployee}
              handleEditEmployee={handleEditEmployee}
            />
          ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
