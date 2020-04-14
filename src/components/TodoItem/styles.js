import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const TodoView = styled(Animatable.View)`
  margin-top: 10px;
  padding: 15px;
  background: #333;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  color: #fff;
  max-width: 85%;
`;

export const RemoveTodoButton = styled.TouchableOpacity`
  width: 15%;
  justify-content: center;
  align-items: center;
`;
