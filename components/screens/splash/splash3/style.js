import {StyleSheet} from 'react-native';
import {Poppins600, Poppins700} from '../../../../constant/fontStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1F9',
  },
  top: {
    flex: 15,
  },
  mid: {
    flex: 55,
  },
  bottom: {
    flex: 30,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  button: {
    marginLeft: '84%',
    marginTop: '10%',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInner: {
    color: '#3787FF',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  svg: {
    // backgroundColor: 'white',
  },
  title: {
    marginTop: 28,
    fontSize: 28,
    color: '#060302',
    letterSpacing: 0,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  descript: {
    fontSize: 16,
    color: '#767372',
    fontFamily: 'Montserrat-Medium',
    marginTop: 28,
    lineHeight: 24,
    textAlign: 'center',
  },
  left: {
    flex: 50,
    marginRight: 8,
  },
  right: {
    flex: 50,
    marginLeft: 8,
  },
  SignUpBtn: {
    marginTop: '16%',
    backgroundColor: '#3787FF',
    height: 50,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3787FF',
  },
  LoginBtn: {
    marginTop: '16%',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3787FF',
  },
  innerBtnSigup: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1,
  },
  innerBtnLogin: {
    color: '#3787FF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1,
  },
});

export default styles;
