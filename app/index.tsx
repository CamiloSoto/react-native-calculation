import {View} from "react-native";

import {globalStyles} from "@/styles/global-styles";

import CalculationButton from "@/components/CalculationButton";
import ThemeText from "@/components/ThemeText";
import {Color} from "@/constants/Color";

import {useCalculator} from "@/hooks/useCalculator";

const CalculatorApp = () => {

    const {
        formula,
        deleteLastNumber,
        buildNumber,
        toggleSign,
        clean
    } = useCalculator()
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* results */}
            <View style={{paddingHorizontal: 30, marginBottom: 20}}>
                <ThemeText>{formula}</ThemeText>
                <ThemeText variant="h2">2500</ThemeText>
            </View>

            {/* buttons */}
            <View style={globalStyles.row}>
                <CalculationButton label="C" blackText color={Color.lightGray} onPress={clean}/>
                <CalculationButton label="+/-" blackText color={Color.lightGray} onPress={toggleSign}/>
                <CalculationButton label="del" blackText color={Color.lightGray} onPress={deleteLastNumber}/>
                <CalculationButton label="/" color={Color.orang} onPress={() => buildNumber('/')}/>
            </View>

            <View style={globalStyles.row}>
                <CalculationButton label="7" onPress={() => buildNumber('7')}/>
                <CalculationButton label="8" onPress={() => buildNumber('8')}/>
                <CalculationButton label="9" onPress={() => buildNumber('9')}/>
                <CalculationButton label="X" color={Color.orang} onPress={() => buildNumber('X')}/>
            </View>

            <View style={globalStyles.row}>
                <CalculationButton label="4" onPress={() => buildNumber('4')}/>
                <CalculationButton label="5" onPress={() => buildNumber('5')}/>
                <CalculationButton label="6" onPress={() => buildNumber('6')}/>
                <CalculationButton label="-" color={Color.orang} onPress={() => buildNumber('-')}/>
            </View>

            <View style={globalStyles.row}>
                <CalculationButton label="1" onPress={() => buildNumber('1')}/>
                <CalculationButton label="2" onPress={() => buildNumber('2')}/>
                <CalculationButton label="3" onPress={() => buildNumber('3')}/>
                <CalculationButton label="+" color={Color.orang} onPress={() => buildNumber('+')}/>
            </View>


            <View style={globalStyles.row}>
                <CalculationButton label="0" doubleSize onPress={() => buildNumber('0')}/>
                <CalculationButton label="." onPress={() => buildNumber('.')}/>
                <CalculationButton label="=" color={Color.orang} onPress={() => buildNumber('=')}/>
            </View>
        </View>
    );
};

export default CalculatorApp;
