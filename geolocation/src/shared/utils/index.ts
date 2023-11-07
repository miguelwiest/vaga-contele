import {Alert, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {format} from 'date-fns';
import api from '../../api';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de localização',
        message:
          'Este aplicativo precisa acessar sua localização para funcionar.',
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const getLocation = () => {
  return new Promise<{currentLatitude: number; currentLongitude: number}>(
    (resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const currentLatitude = position.coords.latitude;
          const currentLongitude = position.coords.longitude;

          resolve({currentLatitude, currentLongitude});
        },
        error => {
          Alert.alert(error.message);
          reject(error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    },
  );
};

export const clearLocation = () => {
  const watchID = Geolocation.watchPosition(position => {
    const currentLatitude = JSON.stringify(position.coords.latitude);
    const currentLongitude = JSON.stringify(position.coords.longitude);

    return {currentLatitude, currentLongitude};
  });
  Geolocation.clearWatch(watchID);
};

const speed = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const currentSpeed = position.coords.speed;

        resolve(currentSpeed);
      },
      error => {
        Alert.alert(error.message);
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  });
};

const currentDate = () => {
  const date = new Date();

  return format(date, 'yyy-MM-dd HH:mm:ss');
};

export const sendPoint = async (
  point: {
    id: string;
    time: string;
    latitude: number;
    longitude: number;
    speed: number;
  },
  id: string,
) => {
  try {
    const response = await api.post(`/points/${id}`, point);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPoints = async () => {
  try {
    const response = await api.get('/points');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const formatDateForHour = (date: string) => {
  const newDate = new Date(date);

  return format(newDate, 'HH:mm');
};

export const handlePoint = async () => {
  const location = await getLocation();
  const currentSpeed = await speed();
  const date = currentDate();

  return {
    id: Math.floor(Date.now() * Math.random()).toString(36),
    time: date,
    latitude: location.currentLatitude,
    longitude: location.currentLongitude,
    speed: currentSpeed,
  };
};
