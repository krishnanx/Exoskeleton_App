import React, { useRef, useEffect } from 'react';
import { ProgressBar } from 'react-native-paper';
import { StyleSheet, Animated, Easing, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WalkingSpeed = ({ value, maxValue = 3 }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: value / maxValue,
            duration: 800,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false,
        }).start();
    }, [value]);

    const animatedWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    return (
        <View style={{ width: "100%", padding: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 5, color: "#E0F2FE" }}>Walking Speed</Text>

            <View style={{ justifyContent: "center", alignItems: "center", height: 70 }}>
                <View style={{ position: 'relative', height: 60, borderRadius: 25, width: "100%", overflow: 'hidden' }}>
                    <ProgressBar
                        color="transparent"
                        style={{ height: 50, borderWidth: 2, backgroundColor: "transparent", borderRadius: 30 }}
                    />
                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: value <= 0.1 ? 10 : 0,
                            left: value <= 0.1 ? 4 : 0,
                            height: value == 0 ? 0 : value <= 0.1 ? 26 : 50,
                            width: animatedWidth,
                            borderRadius: 30,
                            overflow: 'hidden'
                        }}
                    >
                        <LinearGradient
                            colors={['#00FF00', '#32CD32']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Animated.View>
                </View>
            </View>
            <View
                style={{ width: "100%", height: 30, flexDirection: 'row', position: "relative" }}
            >
                <View
                    style={{ position: "absolute" }}
                >
                    <Text
                        style={{ color: "white" }}
                    >
                        |

                    </Text>
                    <Text
                        style={{ color: "white" }}
                    >
                        0
                    </Text>
                </View>
                <View
                    style={{ position: "absolute", left: "32%" }}
                >
                    <Text
                        style={{ color: "white" }}
                    >
                        |

                    </Text>
                    <Text
                        style={{ color: "white" }}
                    >
                        1
                    </Text>
                </View>
                <View
                    style={{ position: "absolute", right: "32%" }}
                >
                    <Text
                        style={{ color: "white" }}
                    >
                        |

                    </Text>
                    <Text
                        style={{ color: "white" }}
                    >
                        2
                    </Text>
                </View>
                <View
                    style={{ position: "absolute", right: 0 }}
                >
                    <Text
                        style={{ color: "white" }}
                    >
                        |

                    </Text>
                    <Text
                        style={{ color: "white" }}
                    >
                        3
                    </Text>
                </View>
            </View>

            {/* <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 5 }}>
                {value.toFixed(1)} / {maxValue} m/s
            </Text> */}
        </View>
    );
};

export default WalkingSpeed;
