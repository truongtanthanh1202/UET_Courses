import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Image, useWindowDimensions } from 'react-native';
import styles from './style'

const Lesson = ({route, navigation}) => {
  const { lessonIndex } = route.params;

  const renderHeader = props => {
    return (
      <View style={styles.top}>
        <TouchableOpacity style={styles.buttonBack} onPress={gobackHandler}>
          <Ionicons name="chevron-back-outline" size={28} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.screenTitle}> Details </Text>
        </View>
        <View style={{flex: 35, height: 28}}>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => {}}>
            <Ionicons name="bookmark-outline" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
      />
      {renderHeader()}
    </SafeAreaView>
  )
}

export default Lesson;
