import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Circle } from "react-native-svg";
import AngleBar from '../components/AngleBar';
import { useSelector } from 'react-redux';
const GaitMetrics = () => {
    const { data, status, Mode } = useSelector((state) => state.data)
    const styles = StyleSheet.create({
        AngleBar: {
            width: "100%",
            //backgroundColor: "pink",
            justifyContent: "space-around",
            alignItems: "center",
            height: "20%",
            flexDirection: "row"
        }
    })
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
        </LinearGradient>
    )
}

export default GaitMetrics