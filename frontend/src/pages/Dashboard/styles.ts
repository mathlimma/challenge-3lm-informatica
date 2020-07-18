import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const EmployeeContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0px 40px 10px;
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

export const RoleGrid = styled.div`
  height: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 0 auto;
  padding: 40px 0px 40px 0px;
`;

export const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Divider = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 2px;
  background: #a9a9a9;
`;

// form

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ButtonWapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  background: #e4e4eb;
  margin-top: 40px;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 20px;
  flex: 1;
  border-radius: 8px;
  padding: 2px 2px 2px 2px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 40px;
  color: #fff;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 0;
  background: #39b100;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin-right: 30px;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  padding: 15px 10px;
  background: #41c900;
  border-radius: 0 8px 8px 0;
  margin: 0 auto;
`;

export const Text = styled.p`
  padding: 5px 10px;
`;
