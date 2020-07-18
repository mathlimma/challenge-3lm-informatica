import styled from 'styled-components';

export const Container = styled.div`
  background: #a9a9a9;
  height: 120px;
  width: 100%;
  padding: 30px 30px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: #39b100;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;
`;

export const Icon = styled.div`
  display: flex;
  padding: 16px 16px;
  background: #41c900;
  border-radius: 0 8px 8px 0;
  margin: 0 auto;
`;

export const Text = styled.p`
  padding: 16px 24px;
`;

export const Image = styled.img`
  height: 50px;
  width: 80px;
`;
