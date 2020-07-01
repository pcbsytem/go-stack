import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1'
  },
  project: {
    color: '#fff',
    fontSize: 30
  }
})

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={projects => projects.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>
              {project.title}
            </Text>
          )}
        />
      </SafeAreaView>
      {/* <View style={styles.container}>
        {projects.map(project => (
          <Text style={styles.title} key={projects.id}>
            {project.title}
          </Text>
        ))}
      </View> */}
    </>
  );
}