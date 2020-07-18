import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Container, Button, Icon, Text, Image } from './styles';
import Logo from '../../assets/3lmlogo.png';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <Button onClick={() => openModal()}>
      <Text>Novo Funcionário</Text>
      <Icon>
        <FiPlusSquare size={24} />
      </Icon>
    </Button>
    <Image src={Logo} />
  </Container>
);

export default Header;
