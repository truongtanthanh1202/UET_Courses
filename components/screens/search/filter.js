import { Dimensions, Text, TouchableHighlight, View } from "react-native"
import { Modal, SlideAnimation, ModalContent } from 'react-native-modals';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles2 } from ".";
import { useState } from "react";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FilterComponent = (props) => {
    const [activeTab, setActiveTab] = useState(1)
    const handleActiveTab = (tab) => {
        setActiveTab(tab)
    }
    const [minValue, setMinValue]= useState(0)
    const [maxValue, setMaxValue]= useState(100)
    const [values, setValues] = useState([0, 100]);

    const handleValuesChange = (newValues) => {
        setValues(newValues);
    };
    const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };
    return (
        <Modal
            visible={props?.visible}
            modalAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            onSwipeOut={(event) => {
                props?.setVisible(false)
            }}

        >
            <View style={{ width: Dimensions.get("window").width, padding: 10, borderRadius: 10, backgroundColor: "#2e89ff" }}>
                <View style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                    <Ionicons name={"close"} size={20} color={"#fff"} />
                    <Text style={{ color: '#fff', fontWeight: 600, fontSize: 24 }}>Search filter</Text>
                    <View style={{ width: 20 }}></View>
                </View>
                <Text style={{ color: '#fff', fontWeight: 600, fontSize: 20, marginTop: 16, marginBottom: 18 }}>Categories</Text>
                <View style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }} >
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(1)} style={[styles2.item, { backgroundColor: activeTab === 1 ? "#2e89ff" : "#fff", color: activeTab === 1 ? "#fff" : "#000" }]}>Design</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(2)} style={[styles2.item, { backgroundColor: activeTab === 2 ? "#2e89ff" : "#fff", color: activeTab === 2 ? "#fff" : "#000" }]}>Painting</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(3)} style={[styles2.item, { backgroundColor: activeTab === 3 ? "#2e89ff" : "#fff", color: activeTab === 3 ? "#fff" : "#000" }]}>Coding</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(4)} style={[styles2.item, { backgroundColor: activeTab === 4 ? "#2e89ff" : "#fff", color: activeTab === 4 ? "#fff" : "#000" }]}>Music</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(4)} style={[styles2.item, { backgroundColor: activeTab === 5 ? "#2e89ff" : "#fff", color: activeTab === 5 ? "#fff" : "#000" }]}>Visual identity</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(5)} style={[styles2.item, { backgroundColor: activeTab === 6 ? "#2e89ff" : "#fff", color: activeTab === 6 ? "#fff" : "#000" }]}>Matheamtics</Text>
                    </TouchableHighlight>
                </View>
                <View style={{width: '100%'}}>
                    <Text style={{ color: '#fff', fontWeight: 600, fontSize: 20, marginTop: 16, marginBottom: 18 }}>Categories</Text>
                    <MultiSlider
                        
                        values={values}
                        sliderLength={Dimensions.get("screen").width - 20}
                        onValuesChange={handleValuesChange}
                        min={minValue}
                        max={maxValue}
                        step={1}
                        allowOverlap={false}
                        snapped
                        selectedStyle={{ backgroundColor: 'blue' }}
                        unselectedStyle={{ backgroundColor: 'silver' }}
                        markerStyle={{ backgroundColor: 'green' }}
                        pressedMarkerStyle={{ backgroundColor: 'red' }}
                        customMarker={(e) => {
                            return (
                                <View
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 30,
                                        backgroundColor: 'white',
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                    }}
                                />
                            );
                        }}
                    />
                </View>
                <Text style={{ color: '#fff', fontWeight: 600, fontSize: 20, marginTop: 20, marginBottom: 18 }}>Duration</Text>
                <View style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }} >
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(1)} style={[styles2.item, { backgroundColor: activeTab === 1 ? "#2e89ff" : "#fff", color: activeTab === 1 ? "#fff" : "#000" }]}>3- 8 hours</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(2)} style={[styles2.item, { backgroundColor: activeTab === 2 ? "#2e89ff" : "#fff", color: activeTab === 2 ? "#fff" : "#000" }]}>8 - 14 hours</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(3)} style={[styles2.item, { backgroundColor: activeTab === 3 ? "#2e89ff" : "#fff", color: activeTab === 3 ? "#fff" : "#000" }]}>14 - 20 hours</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(4)} style={[styles2.item, { backgroundColor: activeTab === 4 ? "#2e89ff" : "#fff", color: activeTab === 4 ? "#fff" : "#000" }]}>20 - 24 hours</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text onPress={() => handleActiveTab(4)} style={[styles2.item, { backgroundColor: activeTab === 5 ? "#2e89ff" : "#fff", color: activeTab === 5 ? "#fff" : "#000" }]}>24 - 30 hours</Text>
                    </TouchableHighlight>
                </View>
                <View style={{width: "100%", marginTop: 12, display: "flex", alignItems: "center", flexDirection: "row"}}>
                    <View style={{padding: 16, borderRadius: 80, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", marginRight: 12}}><Text style={{fontSize: 20, fontWeight: "600", color: "#000"}}>Clear</Text></View>
                    <View style={{padding: 16, borderRadius: 80, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", flex: 1}}><Text style={{fontSize: 20, fontWeight: "600", color: "#000"}} onPress={()=> props?.setVisible(false)}>Apply Filter</Text></View>
                </View>
            </View>
        </Modal>

    )
}

export default FilterComponent