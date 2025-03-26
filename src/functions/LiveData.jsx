import React, { useEffect, useState } from "react";
import { addData, addStatus } from "../Store/DataSlice";
import { useDispatch } from "react-redux";
const LiveData = () => {
    const [data, setData] = useState("Waiting for updates...");
    const dispatch = useDispatch();
    useEffect(() => {
        const ws = new WebSocket('ws://nutrigen.myprojects.studio:5000');


        ws.onopen = () => {
            console.log("Connected to WebSocket server");
            ws.send("Hello from React Native!");
            // dispatch(addStatus("idle"))

        };

        ws.onmessage = (event) => {
            console.log("Data received:", event);
            const parsedData = JSON.parse(event.data);
            console.log("Data received:", parsedData?.new);
            dispatch(addData(parsedData.new));
        };

        ws.onerror = (error) => {
            console.error("WebSocket Error:", error);
            dispatch(addStatus("error"))
        }

        ws.onclose = () => console.log("WebSocket disconnected");

        return () => ws.close();
    }, []);
};

export default LiveData;
