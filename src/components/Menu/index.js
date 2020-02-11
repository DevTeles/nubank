import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  Dados,
  BancoText,
  DescBanco,
  Item,
  GroupInfo,
  SpanText,
  PerfilDetalhes,
} from './styles';

export default function Menu({ translateY }) {
  const base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          size={100}
          value="https://rocketseat.com.br"
          logo={{ uri: base64Logo }}
          logoSize={30}
          logoBackgroundColor="transparent"
        />
      </Code>
      <Dados>
        <Item>
          <BancoText>Banco</BancoText>
          <DescBanco> 260 - Nu Pagamento S.A</DescBanco>
        </Item>
        <Item>
          <BancoText>Agência</BancoText>
          <DescBanco> 0001</DescBanco>
        </Item>
        <Item>
          <BancoText>Conta</BancoText>
          <DescBanco> 123456789-0</DescBanco>
        </Item>
      </Dados>

      <Nav>
        <NavItem>
          <GroupInfo>
            <Icon name="help-outline" size={20} color="#FFF" />
            <NavText>Me ajuda</NavText>
          </GroupInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <GroupInfo>
            <Icon name="credit-card" size={20} color="#FFF" />
            <NavText>Pedir função débito</NavText>
          </GroupInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <GroupInfo>
            <Icon name="person-outline" size={20} color="#FFF" />
            <PerfilDetalhes>
              <NavText>Perfil</NavText>
              <SpanText>Nome de preferência, telefone, e-mail</SpanText>
            </PerfilDetalhes>
          </GroupInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <GroupInfo>
            <Icon name="settings" size={20} color="#FFF" />
            <NavText>Configurar NuConta</NavText>
          </GroupInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <GroupInfo>
            <Icon name="credit-card" size={20} color="#FFF" />
            <NavText>Configurar Cartão</NavText>
          </GroupInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <GroupInfo>
            <Icon name="store" size={20} color="#FFF" />
            <NavText>Pedir conta PJ</NavText>
          </GroupInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <GroupInfo>
            <Icon name="smartphone" size={20} color="#FFF" />
            <NavText>Configurações do app</NavText>
          </GroupInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
