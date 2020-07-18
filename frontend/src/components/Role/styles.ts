import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  background: #f0f0f5;
  border-radius: 8px;
  width: 150px;
`;

export const Body = styled.section`
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TextInfo = styled.p`
  color: #3d3d4d;
  margin-top: 10px;
`;

export const Button = styled.button`
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  border: none;
  transition: 0.1s;
`;

export const Footer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: #e4e4eb;
  border-radius: 0px 0px 8px 8px;
`;
