import React from 'react'
import { View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const AngularVelocity = ({ value, unit }) => {
  return (
    <View>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={(value / 80) * 100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        rotation={0}
      >
        {() => ( // This must be a function returning JSX, not just JSX directly
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            {value} {unit}
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  )
}

export default AngularVelocity