import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './yapilacak.styles';

function yapilacak({item, pressHandlerlong, pressHandler}) {
  return (
    <View>
      {item.yapilma ? (
        <TouchableOpacity
          style={styles.bottom_yapilan_container}
          onPress={() => pressHandler(item.key)}
          onLongPress={() => pressHandlerlong(item.key)}>
          <Text style={styles.bottom_yapilan_text}>{item.text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.bottom_container}
          onPress={() => pressHandler(item.key)}
          onLongPress={() => pressHandlerlong(item.key)}>
          <Text style={styles.bottom_title}>{item.text}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default yapilacak;
//styles.bottom_container
/*  style={({pressed}) => [
          styles.bottom_container,
          {
            backgroundColor: pressed ? 'red' : 'orange',
          },
        ]}
        
          function decreaseCounter() {
    setCounter(counter - 1);
  }
        */
