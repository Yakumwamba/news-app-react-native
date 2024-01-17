import React from 'react';
import { Modal, View, StyleSheet, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
const spinValue = new Animated.Value(0);


const Overlay = ({isVisible, children}) => (
  <Modal
    animationType="fade"
    transparent
    visible={isVisible}
    onRequestClose={() => {}}
  >
    <BlurView
      style={[styles.absolute, styles.centerContent]}
      intensity={10}
      reducedTransparencyFallbackColor="white"
    >
      {children}
    </BlurView>
  </Modal>
);

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overlay;
