import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 35,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  dropdown: {
    flex: 1,
    marginHorizontal: 86,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#3787ff',
    borderRadius: 30,
    marginBottom: 4,
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'white',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  buttonNavigator: {
    backgroundColor: '#e4f1f9',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 12,
  }
});
