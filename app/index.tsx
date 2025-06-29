import {View} from "react-native";

import {globalStyles} from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <ThemeText>50*50</ThemeText>
            <ThemeText variant="h2">2500</ThemeText>
        </View>
    );
};

export default CalculatorApp;
