import {Platform, View} from 'react-native';

import {StatusBar} from "expo-status-bar";
import {useFonts} from 'expo-font';
import {Slot} from "expo-router";

import {globalStyles} from "@/styles/global-styles";

import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.OS === 'android';

if (isAndroid) {
    NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <View style={globalStyles.background}>
            <Slot/>
            <StatusBar style='light'/>
        </View>
    );
};

export default RootLayout;
