import React, { useState } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';
import {
  Container, Top, Logo, Title,
} from './styles';


export default function Header({ translateY }) {
  const [upDown, setUpDown] = useState('keyboard-arrow-down');

  function handleAbreMenu() {
    setUpDown(upDown === 'keyboard-arrow-down' ? 'keyboard-arrow-up' : 'keyboard-arrow-down');

    Animated.timing(translateY, {
      toValue: upDown === 'keyboard-arrow-down' ? 500 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Rafael</Title>
      </Top>
      <Icon name={upDown} size={25} color="#FFF" onPress={handleAbreMenu} />
    </Container>
  );
}
