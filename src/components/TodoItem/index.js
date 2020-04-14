import React, { useRef, useMemo } from 'react';
import { UIManager, LayoutAnimation, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TodoText, TodoView, RemoveTodoButton } from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TodoItem({ todo, remove, index }) {
  const ref = useRef(null);

  useMemo(() => {
    Animatable.initializeRegistryWithDefinitions({
      customSlideDown: {
        from: {
          translateY: (1 + index) * -100,
        },
        to: {
          translateY: 0,
        },
      },
    });
  }, []);

  function shiftItemsAnimation() {
    LayoutAnimation.configureNext({
      duration: 350,
      update: {
        type: LayoutAnimation.Types.easeIn,
        springDamping: 0.7,
      },
    });
  }

  return (
    <TodoView ref={ref} animation="customSlideDown">
      <TodoText>{todo}</TodoText>
      <RemoveTodoButton
        activeOpacity={0.4}
        onPress={async () => {
          await ref.current.fadeOutLeft(800);
          shiftItemsAnimation();
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
  index: PropTypes.number.isRequired,
};
