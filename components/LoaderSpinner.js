import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import LoadingSpinner from '../icons/LoadingSpinner';

const Spinner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true
        }
      )
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.View style={{ transform: [{rotate: spin}] }}>
      <LoadingSpinner />
    </Animated.View>
  );
};

export default Spinner;
