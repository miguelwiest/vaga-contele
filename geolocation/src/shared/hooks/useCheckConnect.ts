import {useEffect} from 'react';
import api from '../../api';
import {setIsOnline} from '../../store/modules/actions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/modules/rootReducer';

const UseCheckConnect = () => {
  const {homeReducer} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkEndpointStatus();
    }, homeReducer.intervalCommunication * 1000);

    return () => {
      clearInterval(intervalId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeReducer.intervalCommunication]);

  const checkEndpointStatus = async () => {
    const timeout = 5000;
    try {
      const response = await api.get('/points', {timeout});
      dispatch(setIsOnline(true));
      return response;
    } catch (error) {
      dispatch(setIsOnline(false));
      console.log('error', error);
      return error;
    }
  };
};

export default UseCheckConnect;
