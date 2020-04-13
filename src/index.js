import React from 'react';
import { StatusBar } from 'react-native';

import TodoList from './pages/TodoList';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#444" />
      <TodoList />
    </>
  );
}
