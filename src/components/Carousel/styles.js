import {Dimensions, StyleSheet} from 'react-native';

export const MAX_WIDTH = Dimensions.get('screen').width - 36;

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 200,
    width: MAX_WIDTH,
  },

  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: MAX_WIDTH,
    bottom: 20,
    zIndex: 2,
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 7.5,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 10,
  },

  activeIndicator: {
    width: 11,
    height: 11,
    borderColor: 'black',
    backgroundColor: 'black',
  },
});

export default styles;
