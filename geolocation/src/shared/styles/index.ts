import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#1c1b84',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.6,
  },
  topBarButton: {
    position: 'absolute',
    right: 20,
  },
  topBarTextButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  h2: {
    fontSize: 16,
    color: '#000',
  },
  p: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#1c1b84',
    height: 50,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  timeButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  container: {
    padding: 20,
  },
});
