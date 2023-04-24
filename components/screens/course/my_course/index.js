import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import styles from './style';

const MyCourse = ({route, navigation}) => {
  const { email } = route.params;
  const gobackHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#E4F1F9"
      />
      <View style={styles.top}>
        <TouchableOpacity style={styles.buttonBack} onPress={gobackHandler}>
          <Ionicons name="chevron-back-outline" size={28} color="#333" />
        </TouchableOpacity>
        <View style={{
          flex: 67,
        }}>
          <Text style={styles.screenTitle}>My Courses</Text>
        </View>
      </View>

      <View style={styles.mid}>
        <View style={{
          flex: 20,
          marginHorizontal: 20,
          backgroundColor: "#3787ff",
          borderRadius: 16,
          maxHeight: 100,
        }}>
          <View style={{
            flex: 1,
            marginHorizontal: 16,
            marginVertical: 16,
          }}>
            <Text style={{color: 'white', marginBottom: 12}}> Learned today </Text>
            <Text style={{color: 'white', marginBottom: 8}}> 46min/60min </Text>
            <Progress.Bar progress={0.7} height={4} width={null} unfilledColor='black' color='white'/>
          </View>
        </View>

        <View style={{
          flex: 40,
          flexDirection: 'row',
          marginHorizontal: 20,
          gap: 12,
          maxHeight: 200,
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#3787ff',
            borderRadius: 16,
          }}>
            <View style={{
              flex: 1,
              marginHorizontal: 16,
              marginVertical: 16,
            }}>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Product
              </Text>
              <Text style={{color: 'white', marginBottom: 36, fontWeight: '600'}}>
                Design v1.0
              </Text>
              <Progress.Bar progress={1} height={4} width={null} unfilledColor='black' color='white'/>
              <Text style={{color: 'white', marginTop: 4}}>
                Completed
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 22}}>
                  14/24
                </Text>
                <Ionicons name="play-circle" size={56} color='black' />
              </View>
            </View>
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#3787ff',
            borderRadius: 16,
          }}>
             <View style={{
              flex: 1,
              marginHorizontal: 16,
              marginVertical: 16,
            }}>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Java
              </Text>
              <Text style={{color: 'white', marginBottom: 36, fontWeight: '600'}}>
                Development
              </Text>
              <Progress.Bar progress={0.8} height={4} width={null} unfilledColor='black' color='white'/>
              <Text style={{color: 'white', marginTop: 4}}>
                Completed
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 22}}>
                  12/18
                </Text>
                <Ionicons name="play-circle" size={56} color='black' />
              </View>
            </View>
          </View>
        </View>

        <View style={{
          flex: 40,
          flexDirection: 'row',
          marginHorizontal: 20,
          gap: 12,
          maxHeight: 200,
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#3787ff',
            borderRadius: 16,
          }}>
            <View style={{
              flex: 1,
              marginHorizontal: 16,
              marginVertical: 16,
            }}>
              <Text style={{color: 'white', marginBottom: 36, fontWeight: '600'}}>
                Visual Design
              </Text>
              <Progress.Bar progress={0.4} height={4} width={null} unfilledColor='black' color='white'/>
              <Text style={{color: 'white', marginTop: 4}}>
                Completed
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 22}}>
                  14/24
                </Text>
                <Ionicons name="play-circle" size={56} color='black' />
              </View>
            </View>
          </View>

          {/* Sorry for being hacky!! */}
          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#3787ff',
            borderRadius: 16,
            opacity: 0,
          }} />
        </View>
      </View>

    </SafeAreaView>
  );
}

export default MyCourse;
