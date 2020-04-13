import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #444;
  padding: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: #333;
  background: #fff;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  padding: 0 10px;
`;

export const NewTodoButton = styled.TouchableOpacity`
  background: #333;
  padding: 5px;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 4px;
  margin-left: 8px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const TodoView = styled.View`
  margin-top: 10px;
  padding: 15px;
  background: #333;
  flex-direction: row;
  justify-content: space-between;
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
