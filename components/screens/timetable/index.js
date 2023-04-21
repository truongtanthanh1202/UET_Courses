import React from 'react';
import { Dimensions, Modal, TextInput, Platform, SafeAreaView } from 'react-native';
import { Text, View, StatusBar, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TimeTable from '@mikezzb/react-native-timetable';
import AsyncStorage from "@react-native-async-storage/async-storage";

import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './style';

// Count from 1, e.g WEEKDAYS[1] = "Monday",...
export const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Timetable = ({ route, navigation }) => {
  const { email } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [eventGroups, setEventGroups] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(false);
  const [items, setItems] = React.useState(WEEKDAYS.map((value, index) => {
      return {
        label: value,
        value: index + 1,
      }
  }))

  const [timePickerStart, setTimePickerStart] = React.useState(false);
  const [timePickerEnd, setTimePickerEnd] = React.useState(false);

  const [timeStart, setTimeStart] = React.useState(new Date(Date.now()));
  const [timeEnd, setTimeEnd] = React.useState(new Date(Date.now()));

  const gobackHandler = () => {
    navigation.goBack();
  };

  function onTimeSelectedStart(_event, value) {
    setTimeStart(value);
    setTimePickerStart(false);
  };

  function onTimeSelectedEnd(_event, value) {
    setTimeEnd(value);
    setTimePickerEnd(false);
  };

  React.useEffect(() => {
    const f = async () => {
    try {
      const value = await AsyncStorage.getItem(`schedule/${email}`);
      if (value != null) setEventGroups(JSON.parse(value));
    } catch (error) {
      console.error(error);
    }
  };
  f();
  }, []);
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
        <Text style={styles.screenTitle}>Timetable</Text>
        <TouchableOpacity style={styles.buttonSave} onPress={() => setModalVisible(!modalVisible)}>
          <Text
            style={{
              color: '#3787ff',
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              textAlign: 'right',
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mid}>
        <ScrollView style={{flex: 1}}>
          <TimeTable
          eventGroups={[
            {
              courseId: 'CSCI2100',
              title: 'Data Structures',
              sections: {
                'A - LEC': {
                  days: [1, 3],
                  startTimes: ['16:30', '14:30'],
                  endTimes: ['17:15', '16:15'],
                  locations: ['Online Teaching', 'Online Teaching'],
                },
                'AT02 - TUT': {
                  days: [7],
                  startTimes: ['17:30'],
                  endTimes: ['18:15'],
                  locations: ['Online Teaching'],
                },
              },
            },
          ]}
          eventOnPress={(event) => alert(`${JSON.stringify(event)}`)}
          />
          <Modal
              animationType={'slide'}
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
                console.log('Modal has been closed.');
              }}>
              {/*All views of Modal*/}
              {/*Animation can be slide, slide, none*/}
              <View style={styles.modal}>
                <Text style={styles.text}>Manage your schedule easily!</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder='Course id'
                  placeholderTextColor="#a1b4d4"
                />
                <TextInput
                  style={styles.inputField}
                  placeholder='Course title'
                  placeholderTextColor="#a1b4d4"
                />
                <DropDownPicker
                  zIndex={3000}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                setItems={setItems}
                  placeholder='Course date'
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', zIndex: -1, width: '100%'}}>
                  <Pressable
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 12,
                      paddingHorizontal: 28,
                      borderRadius: 4,
                      elevation: 3,
                      backgroundColor: '#e4f1f9',
                    }}
                    onPress={() => { setTimePickerStart(!timePickerStart); }}
                  >
                    <Text style={{color: 'black', fontFamily: 'Poppins-Medium'}}> Start time </Text>
                  </Pressable>
                  <View style={{
                    backgroundColor: '#e4f1f9',
                    textAlign: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}>
                    <Text style={{color: 'black', fontSize: 16}}>
                      {getTimetableFromDate(timeStart)}
                    </Text>
                  </View>
                  {timePickerStart &&
                  <DateTimePicker
                      value={timeStart}
                      mode='time'
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={false}
                      onChange={onTimeSelectedStart}
                  />}
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', zIndex: -1, width: '100%'}}>
                  <Pressable
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 12,
                      paddingHorizontal: 32,
                      borderRadius: 4,
                      elevation: 3,
                      backgroundColor: '#e4f1f9',
                    }}
                    onPress={() => { setTimePickerEnd(!timePickerEnd); }}
                  >
                    <Text style={{color: 'black', fontFamily: 'Poppins-Medium'}}> End time </Text>
                  </Pressable>
                  <View style={{
                    backgroundColor: '#e4f1f9',
                    textAlign: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}>
                    <Text style={{color: 'black', fontSize: 16}}>
                      {getTimetableFromDate(timeEnd)}
                    </Text>
                  </View>
                  {timePickerEnd &&
                  <DateTimePicker
                      value={timeEnd}
                      mode='time'
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={false}
                      onChange={onTimeSelectedEnd}
                  />}
                  
                </View>

                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  zIndex: -1,
                  width: '100%',
                  gap: 12,
                  marginTop: 24
                }}>
                  <Pressable
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 12,
                      paddingHorizontal: 32,
                      borderRadius: 4,
                      elevation: 3,
                      backgroundColor: '#e4f1f9',
                    }}
                    onPress={() => { setModalVisible(!modalVisible) }}
                  >
                    <Text style={{color: 'black', fontFamily: 'Poppins-Medium' }}> Exit </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 12,
                      paddingHorizontal: 28,
                      borderRadius: 4,
                      elevation: 3,
                      backgroundColor: '#e4f1f9',
                    }}
                    onPress={() => { setModalVisible(!modalVisible) }}
                  >
                    <Text style={{color: 'black', fontFamily: 'Poppins-Medium' }}> Submit </Text>
                  </Pressable>
                </View>
              </View>
          </Modal>
          {/* This has been replaced by the `Edit` button above */}
          {/* <Pressable
            onPress={() => setModalVisible(true)}
            style={[styles.button, styles.buttonOpen]}
          >
            <Ionicons name="add" size={26} color="white" />
            <Text style={[styles.addText]}> Add new schedule </Text>
          </Pressable> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Timetable;

function getTimetableFromDate(date) {
  return `${date.getHours()}:${date.getMinutes() < 10 ? (date.getMinutes() === 0 ? '00':'0') : ''}${date.getMinutes()}`;
}
