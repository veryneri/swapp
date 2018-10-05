import React from 'react';
import {
  Text,
  View
} from 'react-native';

class InfoContainer extends React.Component {
  render() {
    const {
      label,
      info
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.text}>{info}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#aaa',
    textTransform: 'uppercase'
  },
  text: {
    fontSize: 18,
    marginTop: 5
  }
};

export default InfoContainer;
