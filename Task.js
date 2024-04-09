// Task.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Complete the program 









const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  taskText: {
    maxWidth: '80%',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  deleteButton: {
    backgroundColor: '#ffcccc',
    padding: 8,
    borderRadius: 5,
  },
});

export default Task;
