import React from 'react';
import { View, Text } from 'react-native';
import {Slot} from "expo-router";

const RootLayout = () => {
    return (
        <View>
            <Text>Layout</Text>

            <Slot />
        </View>
    );
};

export default RootLayout;
