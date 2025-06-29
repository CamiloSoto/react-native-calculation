import React from 'react';
import {View} from 'react-native';
import {useFonts} from 'expo-font';
import {Slot} from "expo-router";

import {Color} from "@/constants/Color";
import {StatusBar} from "expo-status-bar";

const RootLayout = () => {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <View style={{
            backgroundColor: Color.background,
            flex: 1,
        }}>
            <Slot/>
            <StatusBar style='light'/>
        </View>
    );
};

export default RootLayout;
