import React from 'react';
import {
  Text,
  View
} from 'react-native';

export default class MovieList extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>MovieLists works!</Text>
      </View>
    );
  }
}

const styles = {
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 18,
    marginTop: 10
  }
};
