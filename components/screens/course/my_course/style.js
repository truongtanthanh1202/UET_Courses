import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    gap: 12,
  },
  top: {
    flex: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    textAlign: 'center',
    // alignItems: 'center',
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
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  mid: {
    flex: 95,
    gap: 20,
  }
});
