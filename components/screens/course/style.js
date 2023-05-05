import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 18,
    // paddingHorizontal: 24,
    justifyContent: 'center',
    gap: 24,
  },
  mid: {
    flex: 82,
    backgroundColor: "#e4f1f9",
    gap: 12,
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
  },
  allCourse: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 12,
    maxHeight: 300,
  },
  courseText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 16
  },
  smallText: {
    fontSize: 13,
  },
  horizontalDivider: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  courseDetails: {
    flex: 1,
    // flexDirection: 'row',
    marginHorizontal: 20,
    gap: 12,
    backgroundColor: 'white',
    borderRadius: 32,
    marginBottom: 18,
    // maxHeight: 300,
  },
  verticalLine: {
    backgroundColor: '#e4f1f9',
    width: 2,
    height: '95%',
    position: 'absolute',
    marginLeft: 35,
    marginTop: 20,
  },
  verticalWrap: {
    justifyContent: 'space-between',
    height: '100%',
  },
  itemWrap: {
    // width: 200,
    height: 'auto',
    // borderWidth: 1,
    marginLeft: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstPoint: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 10,
    width: 10,
    marginLeft: 10,
  }
});
