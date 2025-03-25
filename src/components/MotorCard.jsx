import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, Animated, Easing, View } from 'react-native';
import { useEffect, useRef } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useSelector } from "react-redux";
const MotorCard = ({ title, icon, Content, isActive = true, value, unit = "", fontsize = 20 }) => {
    const { data, status, Mode } = useSelector((state) => state.data);
    const LeftContent = props => icon
    const styles = StyleSheet.create({
        card: {
            width: "95%",
            height: "95%",
            elevation: 5,

        }


    });
    useEffect(() => {
        console.log("Redux Data:", data);
        console.log("MotorCard Value:", value);
        console.log("Redux Status:", status);
    }, [data, value, status]);

    return data ? (
        <Card style={styles.card}>
            {/* <Card.Title title={title} left={LeftContent} titleStyle={{ justifyContent: "center", alignItems: "center", textAlign: "center", flexWrap: "wrap", }} /> */}
            <Card.Content>
                <View
                    style={{ flexDirection: "row", width: "auto", justifyContent: "space-around" }}
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
                    <Text
                        style={{ fontSize: fontsize }}
                    >
                        {value} {unit}
                    </Text>
                </View>

            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Actions>
                {/* <Button>Cancel</Button>
                <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
    ) : <Text style={{ color: "white", fontSize: 20 }}>Loading data...</Text>
}

export default MotorCard