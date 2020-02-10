import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 7px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-left: 0;
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

export const Dados = styled.View`
  flex: 1;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BancoText = styled.Text`
  color: #fff;
  margin-top: 7px;
  font-size: 14px;
`;

export const DescBanco = styled.Text`
  color: #fff;
  margin-top: 7px;
  font-weight: bold;
  font-size: 14px;
`;

export const GroupInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
