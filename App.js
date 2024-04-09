// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Task from './Task';

//Complete the program























  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Add a new task..."
        value={text}
        onChangeText={setText}
        style={styles.input}
        onSubmitEditing={addTask}
      />
      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task task={item} toggleComplete={toggleComplete} removeTask={removeTask} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginVertical: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default App;
