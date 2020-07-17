import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  background: #f0f0f5;
  border-radius: 8px;
  width: 280px;
`;

export const Body = styled.section`
  padding: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TextName = styled.h2`
  color: #3d3d4d;
  font-weight: bold;
`;

export const TextInfo = styled.p`
  color: #3d3d4d;
  margin-top: 16px;
`;

export const TextDescription = styled(TextInfo)`
  font-weight: bold;
`;

export const Header = styled.div`
  background: #a9a9a9;
  border-radius: 8px 8px 0px 0px;
  height: 192px;
  overflow: hidden;
  transition: 0.3s opacity;
  text-align: center;
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
  padding: 20px 30px;
  background: #e4e4eb;

  border-radius: 0px 0px 8px 8px;
`;

export const Image = styled.img`
  pointer-events: none;
  user-select: none;
  width: 200px;
  height: 200px;
`;
