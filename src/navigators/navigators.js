import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import MovieDetail from '../screens/movies/detail/detail';
import MovieList from '../screens/movies/list/list';
import Profile from '../screens/profile/profile';

const Tabs = createBottomTabNavigator({
  'Movie List': {
    screen: MovieList,
  },
  Profile: {
    screen: Profile
  }
});

Tabs.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;

  return {
    headerTitle,
  };
};

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  },
  MovieDetail: {
    screen: MovieDetail,
    navigationOptions: {
      title: 'Movie Detail'
    }
  }
});

export default Stack;
