import React, { useEffect, useRef } from 'react';
import { Avatar, Button, Card, ProgressBar, MD3Colors, Text } from 'react-native-paper';
import { StyleSheet, Animated, Easing, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useSelector } from 'react-redux';
import { addMode } from '../Store/DataSlice';

const CardWProgress = ({ title, icon, Content, isActive = true, value = 0, unit = "", fontsize = 20, maxValue = 1000 }) => {
    const { data, status, Mode } = useSelector((state) => state.data);
    const LeftContent = props => icon;
    const animatedValue = useRef(new Animated.Value(0)).current;

    const styles = StyleSheet.create({
        card: {
            width: "95%",
            height: "95%",
            elevation: 5,
        },
        addMax: {
            width: 100,
            height: 40,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2C2C2C"
        }
    });

    useEffect(() => {
        console.log("Redux Data:", data);
        console.log("MotorCard Value:", value);
        console.log("Redux Status:", status);
        Animated.timing(animatedValue, {
            toValue: value / maxValue,
            duration: 1200,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false,
        }).start();
    }, [data, value, status]);

    const animatedWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    return data ? (
        <Card style={styles.card}>
            <Card.Content>
                <View
                    style={{ flexDirection: "row", width: "auto", justifyContent: "space-around", marginBottom: 10 }}
                >
                    <LeftContent />
                    <Text
                        style={{ fontSize: fontsize - 3 }}
                    >
                        {title}
                    </Text>
                </View>
                <View
                    style={{ width: "auto", justifyContent: "center", alignItems: "center", height: "70%" }}
                >
                    <View
                        style={{
                            position: 'relative', height: 60, borderRadius: 30, marginHorizontal: 5,
                            overflow: 'hidden',
                            width: "100%"
                        }}
                    >
                        <View
                            style={{
                                height: 50, borderRadius: 30,
                                width: "100%",
                                overflow: 'hidden'
                            }}
                        >
                            <ProgressBar
                                color="#2C2C2C"
                                style={{ height: 50, borderWidth: 1.5, backgroundColor: "#2C2C2C", borderRadius: 30, marginBottom: 10 }}
                            />
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    top: value < 1 ? 16 : 0,
                                    left: value < 1 ? 3 : 0,
                                    height: value < 1 ? 15 : 50,
                                    width: animatedWidth,
                                    borderRadius: 30,
                                    overflow: 'hidden'
                                }}
                            >
                                <LinearGradient
                                    colors={['#FFA500', '#FF8C00']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </Animated.View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%", alignItems: "center", height: "30%",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            marginTop: 5,
                        }}
                    >
                        <TouchableOpacity
                            style={styles.addMax}
                            activeOpacity={0.8}
                        >
                            <Text
                                style={{ fontSize: 16, color: "white" }}
                            >
                                Set Goal
                            </Text>
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 20, fontWeight: "bold"
                            }}
                        >
                            {value} / {maxValue}
                        </Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    ) : <Text style={{ color: "white", fontSize: 20 }}>Loading data...</Text>
}

export default CardWProgress;