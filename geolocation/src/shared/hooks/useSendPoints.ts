import {useEffect} from 'react';
import {IPoints} from '../types';
import {sendPoint} from '../utils';
import {setStatus} from '../../store/modules/actions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/modules/rootReducer';

const useSendPoints = () => {
  const {homeReducer, statusReducer} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const findNotSyncedPoints = statusReducer.status?.find(
      (item: IPoints) => !item.synced,
    );

    if (findNotSyncedPoints && homeReducer.isOnline) {
      statusReducer.status.forEach((item: IPoints) => {
        if (item.synced) {
          return;
        }
        sendPoint(
          {
            id: item.id,
            latitude: item.latitude,
            longitude: item.longitude,
            time: item.time,
            speed: item.speed,
          },
          item.id,
        ).then(() => {
          const newStatus = statusReducer.status.map((statusItem: IPoints) => {
            return {
              ...statusItem,
              synced: true,
            };
          });
          dispatch(setStatus(newStatus));
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeReducer.isOnline, statusReducer.status.length]);

  return null;
};

export default useSendPoints;
