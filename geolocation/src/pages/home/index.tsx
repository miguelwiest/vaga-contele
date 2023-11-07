import React, {useCallback} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../shared/styles';
import {useNavigation} from '@react-navigation/native';
import {
  setIntervalCommunication,
  setServiceStatus,
} from '../../store/modules/actions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/modules/rootReducer';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {homeReducer} = useSelector((state: RootState) => state);

  const intervalsOptions = [10, 5, 3, 1];

  const handleServiceStatusChange = useCallback(
    (value: boolean) => {
      dispatch(setServiceStatus(value));
    },
    [dispatch],
  );
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Olá, bem-vindo</Text>
        <TouchableOpacity onPress={() => navigation.navigate('status')}>
          <Text style={styles.topBarTextButton}>Status</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...styles.container,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}>
        <View>
          <Text style={styles.h1}>My GPS - Tracking</Text>
          <Text
            style={{
              ...styles.h2,
              color: homeReducer.isOnline ? 'green' : 'crimson',
            }}>
            {homeReducer.isOnline ? 'Online' : 'Offline'}
          </Text>
        </View>
      </View>
      <View
        style={{
          ...styles.container,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.h2}>Status do serviço</Text>
          <Text>Serviço {homeReducer.serviceStatus ? 'ativo' : 'inativo'}</Text>
        </View>
        <Switch
          value={homeReducer.serviceStatus}
          onValueChange={handleServiceStatusChange}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.h2}>Intervalo de comunicação</Text>
        <View
          style={{
            ...styles.container,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {intervalsOptions.map(interval => {
            return (
              <TouchableOpacity
                style={{
                  ...styles.timeButton,
                  backgroundColor:
                    homeReducer.intervalCommunication === interval
                      ? 'rgba(0, 200, 0, 0.1)'
                      : '#fff',
                  borderColor:
                    homeReducer.intervalCommunication === interval
                      ? 'rgba(0, 200, 0, 1)'
                      : '#ccc',
                }}
                onPress={() => dispatch(setIntervalCommunication(interval))}>
                <Text>{interval}s</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
