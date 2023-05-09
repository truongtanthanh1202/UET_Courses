import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Shadow } from "react-native-shadow-2";
import { FlatList } from "react-native-gesture-handler";

import styles from './style';
import FilterComponent from './filter';
import { useNavigation } from '@react-navigation/native';
const Search = props => {
  const navigation = useNavigation()
  const [KeyboardIsShow, setKeyboardIsShow] = useState(false);
  // Validate search
  const [textErrorSearch, setTextErrorSearch] = useState('');

  const [search, setSearch] = useState('');
  const [openFilter, setOpenFilter] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const handleActiveTab = (tab) => {
    setActiveTab(tab)
  }
  const isValidSearch = stringSearch => {
    return stringSearch.length >= 0
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });

  function renderChoiceYourCourse() {
    return (
      <View style={{ marginLeft: 24, marginTop: 0 }}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 20,
            color: '#222',
            marginBottom: 0,
          }}>
          Choice your course
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            {toggle === false && <View
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>

              <Text style={{
                fontSize: 28,
                color: '#060302',
                fontFamily: 'Montserrat-Medium',
                textAlign: 'left',
                marginTop: 20,
                marginBottom: 12,
              }}>Search</Text>

              <View style={{ width: '100%' }}>
                <TextInput
                  style={styles.inputField}
                  autoFocus={true}
                  placeholder="Search course"
                  placeholderTextColor="black"
                  onChangeText={text => {
                    setTextErrorSearch(
                      isValidSearch(text) == true
                        ? ''
                        : 'Search cannot contains special characters',
                    );
                    setSearch(text);
                  }}></TextInput>
                <Ionicons
                  onPress={() => setToggle(true)}
                  name="search-outline"
                  size={32}
                  style={{
                    position: 'absolute',
                    top: '6%',
                    left: '4%',
                  }}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginLeft: 32,
                    marginBottom: 10,
                  }}>
                  {textErrorSearch}
                </Text>
                <Ionicons
                  onPress={() => setOpenFilter(true)}
                  name="options-outline"
                  size={32}
                  style={{
                    position: 'absolute',
                    top: '6%',
                    left: '87%',
                  }}
                />

                {/*Choise your course*/}
                {renderChoiceYourCourse()}
              </View>
              <View style={styles2.wrap}>
                <TouchableHighlight>
                  <Text onPress={() => handleActiveTab(1)} style={[styles2.item, { backgroundColor: activeTab === 1 ? "#2e89ff" : "#fff", color: activeTab === 1 ? "#fff" : "#000" }]}>All</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text onPress={() => handleActiveTab(2)} style={[styles2.item, { backgroundColor: activeTab === 2 ? "#2e89ff" : "#fff", color: activeTab === 2 ? "#fff" : "#000" }]}>Popular</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text onPress={() => handleActiveTab(3)} style={[styles2.item, { backgroundColor: activeTab === 3 ? "#2e89ff" : "#fff", color: activeTab === 3 ? "#fff" : "#000" }]}>News</Text>
                </TouchableHighlight>
              </View>
              <ScrollView>
                <View style={{ width: "100%", padding: 7 }}>
                  {ProductComponents}
                </View>
              </ScrollView>
              <FilterComponent visible={openFilter} setVisible={setOpenFilter} />
            </View>}
            {
              toggle === true && <>
                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>

                  <View style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
                    <Ionicons onPress={()=> setToggle(false)} size={24} name={"arrow-back"} />
                  <Text style={{
                    fontSize: 28,
                    color: '#060302',
                    fontFamily: 'Montserrat-Medium',
                    textAlign: 'left',
                    marginTop: 20,
                    marginBottom: 12,
                  }}>Search</Text>
                  <View style={{width: 20}}></View>
                  </View>

                  <View style={{ width: '100%' }}>
                    <TextInput
                      style={styles.inputField}
                      autoFocus={true}
                      placeholder="Search course"
                      placeholderTextColor="black"
                      onChangeText={text => {
                        setTextErrorSearch(
                          isValidSearch(text) == true
                            ? ''
                            : 'Search cannot contains special characters',
                        );
                        setSearch(text);
                      }}></TextInput>
                    <Ionicons
                      onPress={() => setToggle(() => false)}
                      name="search-outline"
                      size={32}
                      style={styles.inputIcon}
                    />
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 12,
                        marginLeft: 32,
                        marginBottom: 10,
                      }}>
                      {textErrorSearch}
                    </Text>
                    <Ionicons
                      onPress={() => setOpenFilter(true)}
                      name="options-outline"
                      size={32}
                      style={{
                        position: 'absolute',
                        top: '14%',
                        left: '87%',
                      }}
                    />

                    {/*Choise your course*/}
                    {renderChoiceYourCourse()}
                  </View>
                  <View style={[styles2.wrap, { overflow: "scroll" }]}>
                    <TouchableHighlight>
                      <Text onPress={() => handleActiveTab(1)} style={[styles2.item, { backgroundColor: activeTab === 1 ? "#2e89ff" : "#fff", color: activeTab === 1 ? "#fff" : "#000" }]}>Visual identity</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                      <Text onPress={() => handleActiveTab(2)} style={[styles2.item, { backgroundColor: activeTab === 2 ? "#2e89ff" : "#fff", color: activeTab === 2 ? "#fff" : "#000" }]}>Painting</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                      <Text onPress={() => handleActiveTab(3)} style={[styles2.item, { backgroundColor: activeTab === 3 ? "#2e89ff" : "#fff", color: activeTab === 3 ? "#fff" : "#000" }]}>Coding</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                      <Text onPress={() => handleActiveTab(3)} style={[styles2.item, { backgroundColor: activeTab === 4 ? "#2e89ff" : "#fff", color: activeTab === 3 ? "#fff" : "#000" }]}>Writing</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={{ width: "100%", padding: 10 }}>
                    <View style={{ width: "100%", padding: 10, borderRadius: 80, borderColor: "#000", borderStyle: "solid", borderWidth: 1 }}>
                      <Text style={{ fontSize: 18 }}>Results</Text>
                    </View>
                  </View>
                  <ScrollView>
                    <View style={{ width: "100%", padding: 10 }}>
                      <ComponentProduct2 />
                      <ComponentProduct2 />
                      <ComponentProduct2 />
                      <ComponentProduct2 />
                    </View>
                  </ScrollView>
                  <FilterComponent visible={openFilter} setVisible={setOpenFilter} />
                </View>
              </>
            }
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Search;

export const styles2 = StyleSheet.create({
  wrap: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 80,
    flexDirection: "row"
  },
  item: {
    marginRight: 12,
    padding: 10,
    borderRadius: 80,
    fontSize: 17,
    fontWeight: "600",
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 12
  }
})

const ComponentProduct2 = (props) => {
  return (
    <View style={styles4.container}>
      <Image style={styles4.image} source={{ uri: "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg" }} />
      <View style={styles4.rightSide}>
        <Text style={{ fontWeight: "600", fontSize: 18, color: "#000", marginBottom: 12, color: "#fff" }}>Product design v1.0</Text>
        <Text style={{ marginBottom: 12, color: '#fff' }}>Robertson Connsin</Text>
        <View style={{ display: "flex", alignItems: 'center', flexDirection: "row" }}>
          <Text style={{ fontWeight: "600", color: "#fff", fontSize: 18, }}>$190</Text>
          <Text style={{ padding: 5, borderRadius: 10, backgroundColor: "#000", color: "#fff", marginLeft: 12 }}>18 hours</Text>
        </View>
      </View>
    </View>
  )
}


const styles3 = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginBottom: 12
  },
  image: {
    width: 100,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  rightSide: {
    marginLeft: 16,

  }
})

const products = [
  {
    title: "Product design v1.0",
    author: "Robertson Connsin",
    price: "$190",
    duration: "18 hours",
    imageUrl: "https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg",
  },
  {
    title: "Java Development",
    author: "Nguyen Shane",
    price: "$1300",
    duration: "16 hours",
    imageUrl: "https://img-b.udemycdn.com/course/750x422/2669808_fcbe_3.jpg",
  },
  {
    title: "Visual Design",
    author: "Bert Pullman",
    price: "$250",
    duration: "14 hours",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/55da0cc3e4b07cfd7eba4fcb/1680887169965-2ZI92A2YJLOVKI3HAU87/image.jpg?format=1000w",
  },
  {
    title: "Figma Learning",
    author: "Limitless",
    price: "$0",
    duration: "102349 hours",
    imageUrl: "https://spin.atomicobject.com/wp-content/uploads/Figma-Image.jpg",
  },
];

const ProductComponents = products.map((product) => (
  <View style={styles3.container} key={product.title}>
    <Image style={styles3.image} source={{ uri: product.imageUrl }} />
    <View style={styles3.rightSide}>
      <Text style={{ fontWeight: "600", fontSize: 18, color: "#000", marginBottom: 12 }}>{product.title}</Text>
      <Text style={{ marginBottom: 12 }}>{product.author}</Text>
      <View style={{ display: "flex", alignItems: 'center', flexDirection: "row" }}>
        <Text style={{ fontWeight: "600", color: "#2e89ff", fontSize: 18, }}>{product.price}</Text>
        <Text style={{ padding: 5, borderRadius: 10, backgroundColor: "#2e89ff", color: "#fff", marginLeft: 12 }}>{product.duration}</Text>
      </View>
    </View>
  </View>
));

const styles4 = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#2e89ff",
    flexDirection: "row",
    marginBottom: 12
  },
  image: {
    width: 100,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  rightSide: {
    marginLeft: 16,

  }
})