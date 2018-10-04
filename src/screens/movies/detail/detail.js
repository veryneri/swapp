import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../../store/actions';
import { ProgressiveImage } from '../../../components';

class MovieDetail extends React.Component {
  componentDidMount() {
    const { imdbID } = this.props.navigation.state.params;
    this.props.getMovieDetail(imdbID);
  }

  render() {
    const {
      loadingInfo,
      movieInfo = {}
    } = this.props;
    const {
      Poster,
      Released,
      Title,
    } = movieInfo;
    const content = loadingInfo
      ? (
        <View style={styles.view}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      )
      : (
        <View style={styles.view}>
          <ProgressiveImage
            source={{ uri: Poster}}
            style={styles.image}
            resizeMode='cover'
          />
          <Text style={styles.text}>{Title}</Text>
          <Text style={styles.text}>{Released}</Text>
        </View>
      );

    return content;
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
  },
  image: {
    height: 466,
    marginBottom: 15,
    marginTop: 10,
    width: 300
  }
};

const mapStateToProps = ({ loadingInfo, movieInfo }) => {
  return {
    loadingInfo,
    movieInfo
  };
};

const mapDispatchToProps = {
  getMovieDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
