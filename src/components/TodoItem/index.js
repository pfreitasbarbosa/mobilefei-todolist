import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TodoText, TodoView, RemoveTodoButton } from './styles';

export default function TodoItem({ todo, remove }) {
  const ref = useRef(null);

  return (
    <TodoView ref={ref} animation="slideInDown">
      <TodoText>{todo}</TodoText>
      <RemoveTodoButton
        activeOpacity={0.4}
        onPress={async () => {
          await ref.current.fadeOutLeft(1500);
          remove(todo);
        }}
      >
        <Icon name="trash-can" size={24} color="#fff" />
      </RemoveTodoButton>
    </TodoView>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};
