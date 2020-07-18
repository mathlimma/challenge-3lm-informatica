import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 40px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
`;

export const RoleContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Divider = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  width: 1px;
  background: #a9a9a9;
`;
