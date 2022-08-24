import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, FlatList, View} from 'react-native';
import Post from '../../components/Post';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getData(), []);

  const getData = () => {
    if (!loading && !isListEnd) {
      setLoading(true);
      fetch(
        `https://stg.starzly.io/api/featured-videos?page=${page}&per_page=3&app=1&new=1`,
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.data.length > 0) {
            setPage(page + 1);
            setPosts([...posts, ...responseJson.data]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };

  const renderItem = ({item}) => <Post post={item} />;

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        maxToRenderPerBatch={1}
        showsVerticalScrollIndicator={false}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        style={{backgroundColor: 'black'}}
      />
    </View>
  );
};

export default Home;
