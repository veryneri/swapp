import React from 'react';
import {
  Animated,
  View
} from 'react-native';

class ProgressiveImage extends React.Component {
  thumbnailAnimated;
  imageAnimated;

  constructor(props) {
    super(props);
    this.handleThumbnailLoad = this.handleThumbnailLoad.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
    this.thumbnailAnimated = new Animated.Value(0);
    this.imageAnimated = new Animated.Value(0);
  }

  handleThumbnailLoad() {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
    }).start();
  }

  onImageLoad() {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
    }).start();
  }

  render() {
    const {
      thumbnailSource,
      source,
      style,
      ...props
    } = this.props;


    return (
      <View style={[{ borderRadius: style.borderRadius }, styles.container]}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[style, { opacity: this.thumbnailAnimated }]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={1}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

const styles = {
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
};

export default ProgressiveImage;
