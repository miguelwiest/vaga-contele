import {
  SET_INTERVAL_COMMUNICATION,
  SET_IS_ONLINE,
  SET_SERVICE_STATUS, SET_STATUS,
} from '../types';

export interface StateHome {
  isOnline: boolean;
  serviceStatus: boolean;
  intervalCommunication: number;
}

export const initialStateHome: StateHome = {
  isOnline: false,
  serviceStatus: false,
  intervalCommunication: 10,
};

export const homeReducer = (state = initialStateHome, action: any) => {
  switch (action.type) {
    case SET_IS_ONLINE:
      return {
        ...state,
        isOnline: action.payload,
      };
    case SET_SERVICE_STATUS:
      return {
        ...state,
        serviceStatus: action.payload,
      };
    case SET_INTERVAL_COMMUNICATION:
      return {
        ...state,
        intervalCommunication: action.payload,
      };
    default:
      return state;
  }
};

export interface StateStatus {
  id: string;
  latitude: number;
  longitude: number;
  speed: number;
  time: string;
  synced: boolean;
}

export interface StateStatusReducer {
  status: StateStatus[];
}

export const initialStateStatus: StateStatusReducer = {
  status: [],
};

export const statusReducer = (state = initialStateStatus, action: any) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
