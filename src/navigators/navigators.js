import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import MovieDetail from '../screens/movies/detail/detail';
import MovieList from '../screens/movies/list/list';
import Profile from '../screens/profile/profile';

const Tabs = createBottomTabNavigator({
  MovieList: {
    screen: MovieList
  },
  Profile: {
    screen: Profile
  }
});

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  },
  MovieDetail: {
    screen: MovieDetail
  }
});

export default Stack;
