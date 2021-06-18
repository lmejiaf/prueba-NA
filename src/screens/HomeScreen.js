import React, {useEffect, useState} from 'react';
import {
  selectError,
  selectLoading,
  selectMovies,
  selectPageNumber,
  selectTotalMovies,
} from '../../redux/selectors';
import {fetchMovies, fetchMoviesClean} from '../../redux/actions';
import LoadingAtom from '../components/atoms/LoadingAtom';
import {connect} from 'react-redux';
import {
  Layout,
  Text,
  List,
  ListItem,
  Button,
  Card,
} from '@ui-kitten/components';
import {Alert, View} from 'react-native';
const HomeScreen = ({
  pageNumber,
  movies,
  error,
  loading,
  totalMovies,
  getMovies,
  cleanError,
}) => {
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    if (firstLoad) {
      getMovies(1);
      setFirstLoad(false);
    }
  }, [firstLoad]);
  useEffect(() => {
    if (error) {
      if (!error.includes('negative')) {
        Alert.alert(
          'Algo ha ocurrido!',
          'Error al obtener listado. Intente nuevamente.',
          [
            {
              text: 'Confirmar',
              onPress: () => cleanError(),
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }
    }
  }, [error]);
  const step = 10;
  const next = () => {
    getMovies(pageNumber + 1);
  };
  const prev = () => {
    getMovies(pageNumber - 1);
  };
  const renderItem = ({item, index}) => (
    <Card style={{flex: 1}} key={item.imdbID}>
      <Text>{item.Title}</Text>
      <Text>{item.Year}</Text>
      <Text>{item.Type}</Text>
    </Card>
  );
  return (
    <Layout
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Layout
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
        level="4">
        <Text>Movies Love 2020</Text>
      </Layout>
      <Layout
        style={{
          flex: 0.1,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: '2%',
        }}
        level="4">
        <Button size="small" status="primary" onPress={prev}>
          Prev
        </Button>
        <Text>
          {pageNumber * step - step + 1} - {pageNumber * step}
        </Text>
        <Button size="small" status="primary" onPress={next}>
          Next
        </Button>
      </Layout>
      <Layout
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingBottom: 10,
        }}
        level="3">
        <List
          refreshing={true}
          data={movies}
          renderItem={renderItem}
          style={{width: '100%'}}
          scrollEnabled={true}
        />
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => ({
  movies: selectMovies(state),
  pageNumber: selectPageNumber(state),
  totalMovies: selectTotalMovies(state),
  error: selectError(state),
  loading: selectLoading(state),
});

const mapDispatchToProps = {
  getMovies: pageNumber => fetchMovies(pageNumber),
  cleanError: () => fetchMoviesClean(),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
