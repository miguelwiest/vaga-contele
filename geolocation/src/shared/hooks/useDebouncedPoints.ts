import {useEffect} from 'react';
import {clearLocation, handlePoint, requestLocationPermission} from '../utils';
import {setStorage} from '../../api/local';
import {IPoints} from '../types';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/modules/rootReducer';

const useDebouncedPoints = () => {
  const {homeReducer, statusReducer} = useSelector((state: RootState) => state);
  useEffect(() => {
    if (!homeReducer.serviceStatus) {
      return;
    }

    const intervalId = setInterval(() => {
      const newDataPoints = () => {
        handlePoint().then(newPoint => {
          if (!statusReducer.status) {
            const newDataPoints = [newPoint];
            setStorage('dataPoints', JSON.stringify(newDataPoints));
            return;
          }
          const existingDataPoints = statusReducer.status;
          existingDataPoints.push({
            ...newPoint,
            synced: false,
          } as IPoints);
          setStorage('dataPoints', JSON.stringify(existingDataPoints));
        });
      };
      if (Platform.OS === 'ios') {
        newDataPoints();
      }
      if (Platform.OS === 'android') {
        requestLocationPermission().then(() => {
          newDataPoints();
        });
      }
      clearLocation();
    }, homeReducer.intervalCommunication * 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeReducer.intervalCommunication, homeReducer.serviceStatus]);

  return null;
};

export default useDebouncedPoints;
