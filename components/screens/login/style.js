import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f1f9',
    paddingHorizontal: 24,
  },
  mid: {
    flex: 80,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 28,
    color: '#060302',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  describe: {
    fontSize: 14,
    color: '#767372',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginBottom: 38,
  },
  inputField: {
    height: Platform.OS === 'ios' ? 40 : 52,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 56,
    paddingRight: 32,
    fontSize: 15,
    fontFamily: 'Comfortaa-Bold',
    justifyContent: 'center',
    marginBottom: 4,
  },
  inputIcon: {
    position: 'absolute',
    top: '14%',
    left: '4%',
  },
  buttonSignIn: {
    width: '100%',
    height: Platform.OS === 'ios' ? 40 : 52,
    borderRadius: 28,
    justifyContent: 'center',
    alignItem: 'center',
    marginBottom: 24,
  },
});

export default styles;
