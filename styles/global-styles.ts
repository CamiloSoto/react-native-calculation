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
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button: {
        height: 60,
        width: 60,
        backgroundColor: Color.dartGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 25,
        color: Color.textPrimary,
        fontWeight: '300',
        fontFamily: 'SpaceMono'
    }
})