import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert

  } from 'react-native';

import Styles from '../styles/patternStyles/Styles'



export default function Favorites() {
  
  return (
    <View style={Styles.containerPattern}>
        <Text style={Styles.textScreen}>Favorites</Text>
        
    </View>
  );
}
