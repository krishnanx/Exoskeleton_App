import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, Animated, Easing } from 'react-native';
import { useEffect, useRef } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useSelector } from "react-redux";
const MotorCard = ({ title, icon, Content, isActive = true }) => {
    const { data } = useSelector((state) => state.data);
    const LeftContent = props => icon
    const styles = StyleSheet.create({
        card: {
            width: "95%",
            height: "95%",
            elevation: 5,

        }


    });
    return (
        <Card style={styles.card}>
            <Card.Title title={title} left={LeftContent} titleStyle={{}} />
            <Card.Content>
                <Text>
                    {data?.motorStatus ? "Active" : "Idle"}
                </Text>

            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Actions>
                {/* <Button>Cancel</Button>
                <Button>Ok</Button> */}
            </Card.Actions>
        </Card>
    )
}

export default MotorCard