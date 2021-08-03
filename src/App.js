import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import SearchBar from './components/SearchBar';
import Buton from './components/Yapilacak';

function App() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  const [todos, setTodos] = useState([]);

  const submitHandler = text => {
    increaseCounter();
    setTodos(prevTodos => {
      return [
        {text: text, key: Math.random().toString(), yapilma: false},
        ...prevTodos,
      ];
    });
  };

  const pressHandlerlong = key => {
    decreaseCounter();
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const pressHandler = key => {
    decreaseCounter();
    const newTodosItem = todos.map(item => {
      if (item.key == key) {
        return {...item, yapilma: true};
      }
      return item;
    });
    setTodos(newTodosItem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.Textcontainer_L}>
          <Text style={styles.title}>Yapilacaklar</Text>
        </View>
        <View style={styles.Textcontainer_R}>
          <Text style={styles.title}>{counter}</Text>
        </View>
      </View>
      <View style={styles.center_container}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Buton
              item={item}
              pressHandlerlong={pressHandlerlong}
              pressHandler={pressHandler}
            />
          )}
        />
      </View>
      <View style={styles.bottom_container}>
        <SearchBar submitHandler={submitHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12222d', //102230
  },
  top_container: {
    //flex: 0.1,
    height: 60,
    margin: 5,
    flexDirection: 'row',
    //  backgroundColor: 'white',
  },
  center_container: {
    flex: 0.85,
    //  backgroundColor: 'orange',
  },
  bottom_container: {
    flex: 0.4,
    //height: 125,
    //  backgroundColor: 'red',
  },
  title: {
    fontSize: 38,
    margin: 5,
    fontWeight: 'bold',
    color: 'orange',
  },
  Textcontainer_L: {
    flex: 1,
  },
  umut: {flex: 0.1},
  Textcontainer_R: {},
});

export default App;
