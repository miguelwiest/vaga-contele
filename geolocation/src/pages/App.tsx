import React from 'react';
import Routes from '../routes';
import useSyncDataPoints from '../shared/hooks/useSyncDataPoints';
import useDebouncedPoints from '../shared/hooks/useDebouncedPoints';
import useSendPoints from '../shared/hooks/useSendPoints';
import useCheckConnect from '../shared/hooks/useCheckConnect';

const App = () => {
  // Effect to get the initial data from the API
  useSyncDataPoints();

  // Effect to send the points to the API
  useSendPoints();

  // Effect to debounce the points
  useDebouncedPoints();

  // Effect to check if the user is online
  useCheckConnect();

  return <Routes />;
};
export default App;
