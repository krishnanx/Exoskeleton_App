import React from 'react'
import { View, Text } from 'react-native'
const Home = () => {
    console.log("HI")
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    color: "black"
                }}
            >
                Home
            </Text>
        </View>
    )
}

export default Home