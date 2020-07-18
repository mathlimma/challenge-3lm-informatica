import styled from 'styled-components';

export const Container = styled.div`
  background: #a9a9a9;
  padding: 30px 0;
  height: 120px;
`;

export const Content = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 0 160px;
  display: flex;
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
`;

export const Icon = styled.div`
  display: flex;
  padding: 16px 16px;
  background: #41c900;
  border-radius: 0 8px 8px 0;
  margin: 0 auto;
`;

export const Text = styled.text`
  padding: 16px 24px;
`;

export const Image = styled.img`
  height: 50px;
  width: 80px;
`;