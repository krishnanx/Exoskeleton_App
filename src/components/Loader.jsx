import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

const LoadingAnimation = () => {
    const anim1 = useRef(new Animated.Value(1)).current;
    const anim2 = useRef(new Animated.Value(0.75)).current;
    const anim3 = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.stagger(80, [
                Animated.sequence([
                    Animated.timing(anim1, { toValue: 0.75, duration: 250, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
                    Animated.timing(anim1, { toValue: 1, duration: 250, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
                ]),
                Animated.sequence([
                    Animated.timing(anim2, { toValue: 1, duration: 250, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
                    Animated.timing(anim2, { toValue: 0.75, duration: 250, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
                ]),
                Animated.sequence([
                    Animated.timing(anim3, { toValue: 0.75, duration: 250, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
                    Animated.timing(anim3, { toValue: 1, duration: 250, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
                ])
            ])
        ).start();
    }, []);

    return (
        <View style={styles.loader}>
            <Animated.View style={[styles.bar, { transform: [{ scaleY: anim1 }] }]} />
            <Animated.View style={[styles.bar, { transform: [{ scaleY: anim2 }] }]} />
            <Animated.View style={[styles.bar, { transform: [{ scaleY: anim3 }] }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    bar: {
        width: 14,
        height: 32,
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius: 4,
    },
});

export default LoadingAnimation;