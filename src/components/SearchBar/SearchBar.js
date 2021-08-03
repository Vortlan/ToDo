import React, {useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import styles from './SearchBar.styles';

function SearchBar({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Yapilacak..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.bottom_container}
        onPress={() => submitHandler(text)}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
