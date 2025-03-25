import React from 'react'
import { View } from 'react-native'
import { Svg, Circle, Text } from "react-native-svg";
const AngleBar = ({ value, maxValue = 360, size = 100, strokeWidth = 10 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progressPercent = value / maxValue; // Calculate progress ratio
    const strokeDashoffset = circumference - progressPercent * circumference;
    return (
        <View>
            <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="lightgrey"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Progress Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="dodgerblue"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
                <Text
                    x={size / 2}
                    y={size / 2}
                    fill="white"
                    fontSize="25"
                    fontWeight="bold"
                    textAnchor="middle"
                    alignmentBaseline="middle"

                >
                    {value}
                </Text>
            </Svg>
        </View>
    )
}

export default AngleBar