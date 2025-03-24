import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import ToggleSwitch from "../components/ToggleSwitch"
import powerIcon from "../assets/Power.svg"
import { Svg, Path } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import MotorCard from '../components/MotorCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Wrench from '../components/Wrench';
import { getData } from '../Store/DataSlice';
const Home = () => {
    console.log("HI")
    const { data } = useSelector((state) => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])
    const styles = StyleSheet.create({
        HeadingView: {
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
            height: 100,
            // backgroundColor: "black",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        Main: {
            width: "100%",
            // backgroundColor: "black",
            height: 685
        },
        section1: {
            width: "100%",
            // backgroundColor: "pink",
            height: 200,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: 'row'
        },
        PowerStatus: {
            width: 40,
            height: 40,
            marginRight: 10,
            //backgroundColor: "red",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center"
        },

        MotorCard: {
            width: "50%",
            height: "100%",
            // backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
        }


    });
    return (

        <LinearGradient
            colors={['#0f172a', '#1e293b', '#4b5563']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 38
            }}
        >
            <View
                style={styles.HeadingView}
            >
                <TouchableOpacity
                    onPress={() => { console.log("Button Pressed") }}
                >
                    <View
                        style={[styles.PowerStatus, { backgroundColor: data?.Power !== 1 ? "red" : "green" }]}
                    >
                        <LinearGradient
                            colors={['#0f172a', '#1e293b']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                justifyContent: "center",
                                alignItems: "center"

                            }}
                        >
                            {/* <View
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                backgroundColor: "white"
                            }}
                        >

                        </View> */}

                            <Svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 -960 960 960" fill={data?.Power !== 1 ? "red" : "green"}>
                                <Path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31.5-156.5T197-763l56 56q-44 44-68.5 102T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-67-24.5-125T707-707l56-56q54 54 85.5 126.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-360v-440h80v440h-80Z" />
                            </Svg>


                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                <Text
                    style={[

                        { color: data?.Power !== 1 ? "red" : "green", fontSize: 20 }
                    ]}
                >
                    {data?.Power === 1 ? "ON" : "OFF"}
                </Text>
            </View >
            <View
                style={styles.Main}
            >
                <View
                    style={styles.section1}
                >
                    <View
                        style={styles.MotorCard}
                    >
                        <MotorCard title="Motor Status" icon={<Wrench />} />
                    </View>
                    <View
                        style={styles.MotorCard}
                    >
                        <MotorCard />
                    </View>
                </View>
            </View>

        </LinearGradient >

    )
}

export default Home
