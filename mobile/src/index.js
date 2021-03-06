import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then( response => {
      console.log(response.data)
      setProjects(response.data)
    });
  },[]);

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `New project${Date.now()}`,
      owner: 'Bruno Alencar'
    })

    setProjects([...projects, response.data]);
  }

  return (
    <>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="#7159c1"
    />
  <SafeAreaView style={styles.container}>
    <FlatList 
      data={projects}
      keyExtractor={project => project.id}
      renderItem={({item: project }) => (
        <Text style={styles.project} >{project.title}</Text>
      )}
    />

    <TouchableOpacity 
      activeOpacity={0.6}
      style={styles.button}
      onPress={handleAddProject}
    >
      <Text style={styles.buttonText}>Adicionar projeto</Text>
    </TouchableOpacity>
  
        
  

  </SafeAreaView>
    {/* <View style={styles.container}>
      {projects.map(project => (
        <Text style={styles.project} key={project.id}>{project.title}</Text>
      ))}
    </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  project: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  button: {
    alignSelf: 'stretch',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'bold',

  }
})