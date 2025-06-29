import {StyleSheet} from "react-native";
import {Color} from "@/constants/Color";

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Color.background
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    mainResult: {
        color: Color.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400'
    },
    subResult: {
        color: Color.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300'
    }
})