import {useEffect} from 'react';
import {getPoints} from '../utils';
import {getStorage} from '../../api/local';
import {useDispatch} from 'react-redux';
import {setStatus} from '../../store/modules/actions';
import {IPoints} from '../types';

const useSyncDataPoints = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPoints().then((points: {keys: string[]}) => {
      getStorage('dataPoints').then((dataPoints: any) => {
        if (!dataPoints) {
          return;
        }
        const existingDataPoints = JSON.parse(dataPoints);
        const syncedPoints = existingDataPoints.map((item: IPoints) => {
          const findPoint = points.keys.find((key: string) => key === item.id);
          if (!findPoint) {
            return item;
          }
          return {
            ...item,
            synced: true,
          };
        });
        dispatch(setStatus(syncedPoints));
      });
    });
  }, [dispatch]);

  return null; // Você pode retornar qualquer valor que desejar ou null
};

export default useSyncDataPoints;
