import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Container, Content, Button, Icon, Text, Image } from './styles';
import Logo from '../../assets/3lmlogo.png';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <Content>
      <Image src={Logo} />
      <Button type="button" onClick={openModal}>
        <Text>Novo Funcionário</Text>
        <Icon className="icon">
          <FiPlusSquare size={24} />
        </Icon>
      </Button>
    </Content>
  </Container>
);

export default Header;
