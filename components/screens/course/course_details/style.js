import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f1f9',
  },
  top: {
    flex: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonBack: {
    flex: 33,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
})