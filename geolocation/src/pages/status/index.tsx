import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../shared/styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/modules/rootReducer';
import {formatDateForHour} from '../../shared/utils';

const StatusScreen = () => {
  const navigation = useNavigation();
  const {statusReducer} = useSelector((state: RootState) => state);
  return (
    <ScrollView>
      <View
        style={{
          ...styles.topBar,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 20}}
          onPress={() => navigation.navigate('home')}>
          <Text style={styles.topBarTextButton}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Status</Text>
      </View>
      {statusReducer.status &&
        statusReducer.status
          .sort((a: any, b: any) => new Date(b.time) - new Date(a.time))
          .map((item: any, index: number) => {
            return (
              <View
                key={index}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  paddingVertical: 14,
                  paddingHorizontal: 16,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 0,
                  }}>
                  <Text style={styles.h2}>Pacote ID: {item.id}</Text>
                  <Text style={styles.h2}>{formatDateForHour(item.time)}</Text>
                </View>
                <Text>
                  {item.synced ? 'Sincronizado' : 'Pendente sincronizar'}
                </Text>
              </View>
            );
          })}
    </ScrollView>
  );
};

export default StatusScreen;
