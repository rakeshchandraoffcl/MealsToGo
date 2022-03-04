import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const FadeInView = ({ duration = 1500, children, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  );
};
