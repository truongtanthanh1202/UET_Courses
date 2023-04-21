import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mid: {
    flex: 95,
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: width / 2,
    flexDirection: 'row',
    justifyContent: "center"
    // flex: "auto",
  },
  buttonOpen: {
    backgroundColor: '#3788ff',
  },
  buttonBack: {
    flex: 33,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  buttonSave: {
    flex: 33,
    height: 40,
    justifyContent: 'center',
  },
  screenTitle: {
    textAlign: 'center',
    flex: 33,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  addText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    padding: 100,
    gap: 12,
    zIndex: 0,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  inputField: {
    height: Platform.OS === 'ios' ? 40 : 52,
    width: '100%',
    backgroundColor: '#e4f1f9',
    borderRadius: 20,
    paddingLeft: 56,
    paddingRight: 32,
    fontSize: 15,
    fontFamily: 'Comfortaa-Bold',
    justifyContent: 'center',
    marginBottom: 4,
    zIndex: -1
  },
});
