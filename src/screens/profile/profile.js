import React from 'react';
import { View } from 'react-native';
import {
  InfoContainer,
  ProgressiveImage
} from '../../components';
import Moment from 'moment';

const USER = {
  gender: 'female',
  name: {
    title: 'miss',
    first: 'kristin',
    last: 'armstrong'
  },
  location: {
    street: 'ljan terrasse 346',
    city: 'vear',
    state: 'rogaland',
    country: 'Hawaii',
    postcode: '3095',
    coordinates: {
      latitude: '54.8646',
      longitude: '-97.3136'
    },
    timezone: {
      offset: '-10:00',
      description: 'Hawaii'
    }
  },
  email: 'kristin.armstrong@mail.com',
  dob: {
    date: '1989-11-12T06:34:44Z',
    age: 28
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/67.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/67.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/67.jpg'
  }
};

export default class Profile extends React.Component {
  render() {
    const {
      dob,
      location,
      email,
      name,
      picture,
    } = USER;
    const displayDOB =  Moment(dob.date).format('L');

    return (
      <View style={styles.view}>
        <View style={styles.imageContainer}>
          <ProgressiveImage
            thumbnailSource={{ uri: picture.thumbnail }}
            source={{ uri: picture.large}}
            style={styles.image}
            resizeMode='cover'
        />
        </View>

        <InfoContainer
          label='Name'
          info={ `${name.first} ${name.last}` }
        />
        <InfoContainer
          label='Email'
          info={ email }
        />
        <InfoContainer
          label='Birthday'
          info={ displayDOB }
        />
        <InfoContainer
          label='Location'
          info={ location.country }
        />
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
  image: {
    borderRadius: 67.5,
    width: 125,
    height: 125
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 50
  }
};
