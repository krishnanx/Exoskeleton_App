import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Circle } from "react-native-svg";
import AngleBar from '../components/AngleBar';
import { useSelector } from 'react-redux';
import CircularProgress from "../components/CircularProgress"
import CardWProgress from "../components/CardWProgress"
import MotorCard from '../components/MotorCard';
const GaitMetrics = () => {
    const { data, status, Mode } = useSelector((state) => state.data)
    const styles = StyleSheet.create({
        Main: {
            flex: 1,
            width: '100%',
            flexGrow: 1,



        },
        AngleBar: {
            width: "100%",
            //backgroundColor: "pink",
            justifyContent: "space-around",
            alignItems: "center",
            height: "20%",
            flexDirection: "row"
        },
        AngularVelocity: {
            width: "100%",
            //backgroundColor: "pink",
            justifyContent: "space-around",
            alignItems: "center",
            height: "20%",
            flexDirection: "row"
        },
        middleSection: {
            width: "100%",
            // /backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            height: "40%",
            flexDirection: "column"
        },
        AVA: {
            width: "50%",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            //backgroundColor: "pink"

        },
        cards: {
            width: "100%",
            height: "50%",

        }
    })
    return (
        <ScrollView
            style={styles.Main}
            contentContainerStyle={{ flexGrow: 1, height: 1000, justifyContent: "flex-start" }}
        >
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
                    style={styles.AngleBar}
                >
                    <View>
                        <Text
                            style={{ fontSize: 25, color: "white", fontWeight: "bold" }}
                        >
                            Ankle Joint Angle
                        </Text>
                    </View>
                    <View>
                        <AngleBar value={data?.ankleAngle} />
                    </View>
                </View>
                <View
                    style={styles.middleSection}
                >
                    <View
                        style={[styles.cards, { alignItems: "center" }]}
                    >
                        <View
                            style={{ justifyContent: "center", width: "50%", alignItems: "center" }}

                        >
                            <MotorCard title={"Ground Reaction Force (GRF)"} value={600} unit='N' />
                        </View>
                    </View>
                    <View
                        style={[styles.cards, { alignItems: "flex-end" }]}
                    >
                        <View
                            style={{ justifyContent: "center", width: "100%", alignItems: "center" }}

                        >
                            <CardWProgress title={"Step Count"} fontsize={28} value={data?.stepCount} />
                        </View>
                    </View>
                </View>
                <View
                    style={styles.AngularVelocity}
                >
                    <View
                        style={styles.AVA}
                    >
                        <CircularProgress value={20} unit={"rad/s"} />
                        <View

                        >
                            <Text
                                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                            >
                                Angular Velocity
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.AVA}

                    >
                        <CircularProgress value={10} unit={"m/s"} />
                        <View>
                            <Text
                                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                            >
                                Acceleration
                            </Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>

    )
}

export default GaitMetrics