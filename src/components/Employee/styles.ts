import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  border-radius: 8px;
`;

export const IconContainer = styled.div`
  flex: 1;
`;

export const Body = styled.section`
  padding: 30px;

  h2 {
    color: #3d3d4d;
  }

  p {
    color: #3d3d4d;
    margin-top: 16px;
  }
`;

export const Header = styled.div`
  background: #ffb84d;
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
  justify-content: space-between;
  align-items: center;

  padding: 20px 30px;
  background: #e4e4eb;
  border-radius: 0px 0px 8px 8px;
`;

export const Image = styled.img`
  pointer-events: none;
  user-select: none;
`;
