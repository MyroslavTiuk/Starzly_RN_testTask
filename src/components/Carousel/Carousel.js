import React, {useRef, useState} from 'react';
import {Animated, Image, View} from 'react-native';
import styles, {MAX_WIDTH} from './styles';
import useInterval from './useInterval';

const carouselImages = [
  'https://cdn.notinoimg.com/detail_zoom/dior/3348901368254_02/dior-sauvage___5.jpg',
  'https://cdn.notinoimg.com/detail_zoom/dior/3348901368254xx_03/dior-sauvage___5.jpg',
  'https://cdn.notinoimg.com/detail_zoom/dior/3348901567572_07/dior-sauvage___5.jpg',
  'https://cdn.notinoimg.com/detail_zoom/dior/3348901567572_08/dior-sauvage___5.jpg',
  'https://cdn.notinoimg.com/detail_zoom/dior/3348901567572_04/dior-sauvage___5.jpg',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const animation = useRef(new Animated.Value(0));

  useInterval(() => handleAnimation(), 3000);

  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= carouselImages.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };

  return (
    <>
      <View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateX: animation.current}],
            },
          ]}>
          {carouselImages.map(image => (
            <Image key={image} source={{uri: image}} style={styles.image} />
          ))}
        </Animated.View>

        <View style={styles.indicatorContainer}>
          {carouselImages.map((image, index) => (
            <View
              key={`${image}_${index}`}
              style={[
                styles.indicator,
                index === currentImage ? styles.activeIndicator : undefined,
              ]}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default Carousel;
