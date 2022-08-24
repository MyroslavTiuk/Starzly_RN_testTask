import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import React, {useState} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';
import Carousel from '../Carousel/Carousel';
import styles from './styles';

const Post = ({post}) => {
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const onPaused = () => {
    setPaused(!paused);
  };

  const onLiked = () => {
    const likesToAdd = liked ? -1 : 1;

    setLikes(likes + likesToAdd);
    setLiked(!liked);
  };

  const onMuted = () => {
    setMuted(!muted);
  };

  const renderInner = () => (
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.modalCloseButton}
        onPress={() => bs.current.snapTo(1)}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/cross.png')}
        />
      </TouchableOpacity>

      <Carousel />

      <View style={styles.modalRowContainer}>
        <Text style={styles.modalProductSpec}>
          Top notes: Bergamot, Grape Fruit, Apple
        </Text>
        <View style={styles.modalProductExclusiveContainer}>
          <Text style={styles.modalProductExclusive}>EXCLUSIVE</Text>
        </View>
      </View>

      <View style={styles.modalTitleContainer}>
        <Text style={styles.modalProductTitle}>
          Royalty Eau de Parfum - 100ml
        </Text>
        <View style={styles.modalRowContainer}>
          <Text style={styles.modalProductPriceOld}>$140</Text>
          <Text style={styles.modalProductPrice}>$99</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.modalTitleContainer}>
        <View style={styles.modalTitleContainer}>
          <Image
            style={styles.modalProfilePicture}
            source={{
              uri: `${post.talent.avatar_url}`,
            }}
          />
          <View>
            <View style={styles.modalRowContainer}>
              <Text style={styles.modalProfileSpec}>By </Text>
              <Text style={styles.modalProfileName}>{post.talent.name_en}</Text>
            </View>
            <Text style={styles.modalProfileSpec}>Actors ► Egypt</Text>
          </View>
        </View>
        <View style={styles.modalReviewsContainer}>
          <View style={styles.modalRowContainer}>
            <Image
              style={styles.modalReviewsIcon}
              source={require('../../assets/images/star.png')}
            />
            <Text style={styles.modalReviewsRating}>4.9</Text>
          </View>
          <Text style={styles.modalReviews}>33 reviews</Text>
        </View>
      </View>

      <Text style={styles.modalDescriptionTitle}>Description</Text>

      <View style={styles.modalDescriptionContainer}>
        <Text style={styles.modalDescription}>
          A perfume that captures hearts..{'\n'}
          Detailed as a piece of arts..{'\n'}
          Alters your mood and reality..{'\n'}
          Feelings speak of its sensuality..
        </Text>
        <Text style={styles.modalDescriptionMore}>See More</Text>
      </View>

      <View style={styles.modalRowContainer}>
        <TouchableOpacity style={styles.modalAddVideoContainer}>
          <View style={styles.modalAddVideo}>
            <Image
              style={styles.modalAddIcon}
              source={require('../../assets/images/video.png')}
            />
            <Text style={styles.modalAddButton}>ADD VIDEO REVIEW</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalAddCartContainer}>
          <Image
            style={styles.modalAddIcon}
            source={require('../../assets/images/cart.png')}
          />
          <Text style={styles.modalAddButton}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[765, -100000]}
        renderContent={renderInner}
        initialSnap={1}
        borderRadius={25}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <TouchableWithoutFeedback onPress={onPaused}>
        <View>
          <VisibilitySensor
            onChange={isVisible => {
              return isVisible
                ? (setPaused(false), setMuted(false))
                : (setPaused(true), setMuted(true));
            }}>
            <View>
              <Video
                source={{
                  uri: `${post.url}`,
                }}
                style={styles.video}
                resizeMode={'cover'}
                repeat={true}
                paused={paused}
                muted={muted}
              />
            </View>
          </VisibilitySensor>

          <View style={styles.uiContainer}>
            <View style={styles.upperContainer}>
              <Text style={styles.talentTitle}>
                {post.talent.name_en} to All users
              </Text>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../../assets/images/dots.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.rightContainer}>
              <TouchableOpacity style={styles.iconContainer} onPress={onLiked}>
                <View style={styles.iconWrapper}>
                  {liked ? (
                    <Image
                      style={styles.icon}
                      source={require('../../assets/images/liked.png')}
                    />
                  ) : (
                    <Image
                      style={styles.icon}
                      source={require('../../assets/images/like.png')}
                    />
                  )}
                </View>
                <Text style={styles.iconLabel}>{likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer}>
                <View style={styles.iconWrapper}>
                  <Image
                    style={styles.icon}
                    source={require('../../assets/images/comment.png')}
                  />
                </View>
                <Text style={styles.iconLabel}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: `${post.talent.avatar_url}`,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={onMuted}>
                <View style={styles.iconWrapper}>
                  {muted ? (
                    <Image
                      style={styles.icon}
                      source={require('../../assets/images/muted.png')}
                    />
                  ) : (
                    <Image
                      style={styles.icon}
                      source={require('../../assets/images/mute.png')}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Image
                  style={styles.itemImage}
                  source={{
                    uri: 'https://cdn.notinoimg.com/detail_zoom/dior/3348901368254_01/dior-sauvage___5.jpg',
                  }}
                />
              </View>

              <View style={styles.itemInfo}>
                <Text style={styles.itemPrice}>$140</Text>
                <Text style={styles.itemName} numberOfLines={1}>
                  #Eau de Parfum
                </Text>
                <Text style={styles.itemDescription} numberOfLines={1}>
                  Top notes: Bergamot, Grape Fruit, Apple
                </Text>
              </View>

              <TouchableOpacity
                style={styles.addButtonContainer}
                onPress={() => bs.current.snapTo(0)}>
                <Text style={styles.addButton}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
