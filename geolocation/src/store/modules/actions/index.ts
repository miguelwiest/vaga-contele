import {
  SET_INTERVAL_COMMUNICATION,
  SET_IS_ONLINE,
  SET_SERVICE_STATUS,
  SET_STATUS,
} from '../types';
import {StateStatus} from '../reducers';

export const setIsOnline = (isOnline: boolean) => ({
  type: SET_IS_ONLINE,
  payload: isOnline,
});

export const setServiceStatus = (serviceStatus: boolean) => ({
  type: SET_SERVICE_STATUS,
  payload: serviceStatus,
});

export const setIntervalCommunication = (intervalCommunication: number) => ({
  type: SET_INTERVAL_COMMUNICATION,
  payload: intervalCommunication,
});

export const setStatus = (status: StateStatus[]) => ({
  type: SET_STATUS,
  payload: status,
});
