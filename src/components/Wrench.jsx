import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
const Wrench = ({ isactive }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;
    const { data, status } = useSelector((state) => state.data);
    useEffect(() => {
        if (data?.motorStatus) {
            const pulse = Animated.loop(
                Animated.sequence([
                    Animated.timing(scaleValue, {
                        toValue: 1.1,
                        duration: 500,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleValue, {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                ])
            );

            pulse.start();
            return () => pulse.stop(); // Cleanup on unmount
        }
    }, [data]);


    return (
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
            <Icons name="wrench-outline" size={30} color="#E0F2FE" />
        </Animated.View>
    );
}

export default Wrench;
