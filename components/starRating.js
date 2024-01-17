
import React, { useState } from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Star = ({ filled }) => {
    return (
      <MaterialIcons
        name={filled ? 'star' : 'star-border'}
        size={12}   
        color={filled ? '#ffb300' : '#aaa'}
      />
    );
  };

  const StarRating = ({ active}) => {
    const totalStars = 5;
    const activeStars = active;
    const stars = Array(totalStars).fill().map((_, i) => (
      <Star key={i} filled={i < activeStars} />
    ));
  
    return <View style={{ flexDirection: 'row' }}>{stars}</View>;
  };

  export default StarRating;