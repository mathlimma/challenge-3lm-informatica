import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import EmployeeItem from '../../components/Employee';
import RoleItem from '../../components/Role';
import ModalAddEmployee from '../../components/ModalAddEmployee';
import ModalEditEmployee from '../../components/ModalEditEmployee';
import { Creators as EmployeeActions } from '../../store/ducks/employee';
import { Creators as RoleActions } from '../../store/ducks/role';
import { FiPlusSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';

import {
  IEmployee,
  IEditEmployee,
  IRootState,
  IRole,
  IEditRole,
} from '../../interfaces';
import {
  Container,
  EmployeeContainer,
  RoleContainer,
  RoleGrid,
  Body,
  Divider,
  //form
  Form,
  Button,
  ButtonWapper,
  Icon,
  Text,
  InputWrapper,
} from './styles';

const Dashboard: React.FC = () => {
  const [editingEmployee, setEditingEmployee] = useState<IEmployee>(
    {} as IEmployee,
  );
  const [editingRole, setEditingRole] = useState<IRole>({} as IRole);
  const [editRole, setEditRole] = useState<boolean>(false);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const {
    getEmployeesRequest,
    addEmployeeRequest,
    updateEmployeeRequest,
    deleteEmployeeRequest,
  } = EmployeeActions;
  const {
    getRolesRequest,
    addRoleRequest,
    updateRoleRequest,
    deleteRoleRequest,
  } = RoleActions;
  const { employees } = useSelector((state: IRootState) => state.employee);
  const { roles } = useSelector((state: IRootState) => state.role);
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadEmployeesAndRoles(): Promise<void> {
      dispatch(getEmployeesRequest());
      dispatch(getRolesRequest());
    }
    loadEmployeesAndRoles();
  }, []);

  // role handles
  async function handleAddRole(role: IEditRole): Promise<void> {
    dispatch(addRoleRequest(role));
  }

  async function handleUpdateRole(role: IEditRole, id: number): Promise<void> {
    dispatch(updateRoleRequest(role, id));
    setEditRole(false);
  }

  async function handleDeleteRole(id: number): Promise<void> {
    dispatch(deleteRoleRequest(id));
  }

  function handleEditRole(role: IRole): void {
    setEditingRole(role);
    setEditRole(true);
  }

  // employee handles
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

  function handleEditEmployee(employee: IEmployee): void {
    setEditingEmployee(employee);
    toggleEditModal();
  }

  // modals
  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleButton(data: any, { reset }: any) {
    if (editRole) {
      handleUpdateRole(data, editingRole._id);
    } else {
      handleAddRole(data);
    }

    reset();
  }

  return (
    <Container>
      <Header openModal={toggleModal} />
      <ModalAddEmployee
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddEmployee={handleAddEmployee}
        roles={roles}
      />
      <ModalEditEmployee
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingEmployee={editingEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
        roles={roles}
      />

      <Body>
        <EmployeeContainer>
          {employees &&
            employees.map(employee => (
              <EmployeeItem
                key={employee._id}
                employee={employee}
                handleDelete={handleDeleteEmployee}
                handleEditEmployee={handleEditEmployee}
              />
            ))}
        </EmployeeContainer>
        <Divider />
        <RoleContainer>
          <Form
            ref={formRef}
            onSubmit={handleButton}
            initialData={editRole ? editingRole : {}}
          >
            <InputWrapper>
              {editRole ? (
                <Input name="description" placeholder="Editar Cargo" />
              ) : (
                <Input name="description" placeholder="Novo Cargo" />
              )}
            </InputWrapper>

            <ButtonWapper>
              <Button type="submit">
                <Text>{editRole ? 'Editar cargo' : 'Add Cargo'}</Text>
                <Icon>
                  <FiPlusSquare size={20} />
                </Icon>
              </Button>
            </ButtonWapper>
          </Form>
          <RoleGrid>
            {roles &&
              roles.map(role => (
                <RoleItem
                  key={role._id}
                  role={role}
                  handleDelete={handleDeleteRole}
                  handleEditRole={handleEditRole}
                />
              ))}
          </RoleGrid>
        </RoleContainer>
      </Body>
    </Container>
  );
};

export default Dashboard;
