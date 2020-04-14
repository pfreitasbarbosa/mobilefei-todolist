import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Input, NewTodoButton, InputWrapper } from './styles';

import TodoItem from '../../components/TodoItem';

export default function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    if (!todo) return;

    setNewTodo('');
    Keyboard.dismiss();
    setTodoList([...todoList, todo]);
  }

  function removeTodo(todoName) {
    setTodoList(todoList.filter((todo) => todo !== todoName));
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          onChangeText={(text) => setNewTodo(text)}
          placeholder="Estudar React Native"
          value={newTodo}
          returnKeyType="send"
          onSubmitEditing={() => addTodo(newTodo)}
        />
        <NewTodoButton activeOpacity={0.5} onPress={() => addTodo(newTodo)}>
          <Icon name="plus" size={24} color="#fff" />
        </NewTodoButton>
      </InputWrapper>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={todoList}
        keyExtractor={(todo) => todo}
        renderItem={({ item: todo, index }) => (
          <TodoItem todo={todo} remove={removeTodo} index={index} />
        )}
      />
    </Container>
  );
}
