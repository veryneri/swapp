import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { listMovies } from '../../../store/actions';

class MovieList extends React.Component {
  componentDidMount() {
    this.props.listMovies();
  }

  renderMovie({ item: movie }) {
    return (
      <View style={styles.movie}>
        <Text>{movie.Title}</Text>
      </View>
    );
  }

  render() {
    const { movies } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={movies}
        renderItem={this.renderMovie}
      />
    );
  }
  /*
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>MovieLists works!</Text>
      </View>
    );
  }
  */
}

/*
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
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  movie: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let movies = state.movies.map(movie => ({ key: movie.imdbID, ...movie }));

  return {
    movies
  };
};

const mapDispatchToProps = {
  listMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

