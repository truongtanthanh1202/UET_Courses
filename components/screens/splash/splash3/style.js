import {StyleSheet} from 'react-native';

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
  },
  svg: {
    // backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#060302',
    letterSpacing: 1.4,
    lineHeight: 28,
    textAlign: 'center',
  },
  descript: {
    fontSize: 16,
    color: '#767372',
    marginTop: 16,
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
    fontWeight: 500,
    letterSpacing: 1,
  },
  innerBtnLogin: {
    color: '#3787FF',
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1,
  },
});

export default styles;
