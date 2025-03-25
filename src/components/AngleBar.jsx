import React from 'react'
import { View, Text } from 'react-native'
import { Svg, Circle, } from "react-native-svg";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const AngleBar = ({ value }) => {

    return (
        <View>
            <AnimatedCircularProgress
                size={120}
                width={15}
                fill={(value / 100) * 100}
                tintColor="#00e0ff"
                backgroundColor="#3d5875"
                rotation={0}
            >
                {() => ( // This must be a function returning JSX, not just JSX directly
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>
                        {value}°
                    </Text>
                )}
            </AnimatedCircularProgress>
        </View>
    )
}

export default AngleBar