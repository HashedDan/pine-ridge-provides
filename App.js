import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjgo7q57i2des01134cuwte0a' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ListPage />
      </ApolloProvider>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
