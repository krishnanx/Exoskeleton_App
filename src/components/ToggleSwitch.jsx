import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

const Switch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <StyledWrapper>
            <TouchableOpacity onPress={toggleSwitch}>
                <ToggleContainer isOn={isOn}>
                    <ToggleCircle isOn={isOn} />
                    <ToggleText isOn={!isOn}>Off</ToggleText>
                    <ToggleText isOn={isOn}>On</ToggleText>
                </ToggleContainer>
            </TouchableOpacity>
        </StyledWrapper>
    );
};

// 🧠 Wrapper styling
const StyledWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #f4f4f4;
`;

// 🎯 Toggle container
const ToggleContainer = styled.View`
  width: 150px;
  height: 60px;
  border-radius: 50px;
  background-color: ${(props) => (props.isOn ? "#4caf50" : "#ddd")};
  flex-direction: row;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

// 🎉 The circle that moves
const ToggleCircle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  position: absolute;
  left: ${(props) => (props.isOn ? "90px" : "5px")};
  transition: left 0.3s ease;
`;

// 📝 Text inside the switch
const ToggleText = styled.Text`
  color: ${(props) => (props.isOn ? "#fff" : "#333")};
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  left: ${(props) => (props.isOn ? "25px" : "100px")};
`;

export default Switch;
