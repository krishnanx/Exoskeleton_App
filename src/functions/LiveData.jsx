import React, { useEffect, useState } from "react";
import { addData } from "../Store/DataSlice";
import { useDispatch } from "react-redux";
const LiveData = () => {
    const [data, setData] = useState("Waiting for updates...");
    const dispatch = useDispatch();
    useEffect(() => {
        const ws = new WebSocket('ws://192.168.1.48:3000');


        ws.onopen = () => {
            console.log("Connected to WebSocket server");
            ws.send("Hello from React Native!");

        };

        ws.onmessage = (event) => {
            //console.log("Data received:", event);
            const parsedData = JSON.parse(event.data);
            console.log("Data received:", parsedData?.new);
            dispatch(addData(parsedData.new));
        };

        ws.onerror = (error) => console.error("WebSocket Error:", error);

        ws.onclose = () => console.log("WebSocket disconnected");

        return () => ws.close();
    }, []);
};

export default LiveData;
