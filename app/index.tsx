import {View} from "react-native";

import {globalStyles} from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculationButton from "@/components/CalculationButton";
import {Color} from "@/constants/Color";

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* results */}
            <View style={{
                paddingHorizontal: 30,
                marginBottom: 20,
            }}>
                <ThemeText>50X50</ThemeText>
                <ThemeText variant="h2">2500</ThemeText>
            </View>

            {/* buttons */}
            <View style={globalStyles.row}>
                <CalculationButton label="C" blackText color={Color.lightGray} onPress={() => console.log('C')}/>
                <CalculationButton label="+/-" blackText color={Color.lightGray} onPress={() => console.log('+/-')}/>
                <CalculationButton label="del" blackText color={Color.lightGray} onPress={() => console.log('del')}/>
                <CalculationButton label="/" color={Color.orang} onPress={() => console.log('/')}/>
            </View>

            <View style={globalStyles.row}>
                <CalculationButton label="7" onPress={() => console.log('7')}/>
                <CalculationButton label="8" onPress={() => console.log('8')}/>
                <CalculationButton label="9" onPress={() => console.log('9')}/>
                <CalculationButton label="X" color={Color.orang} onPress={() => console.log('X')}/>
            </View>

            <View style={globalStyles.row}>
                <CalculationButton label="4" onPress={() => console.log('4')}/>
                <CalculationButton label="5" onPress={() => console.log('5')}/>
                <CalculationButton label="6" onPress={() => console.log('6')}/>
                <CalculationButton label="-" color={Color.orang} onPress={() => console.log('-')}/>
            </View>

            <View style={globalStyles.row}>
                <CalculationButton label="1" onPress={() => console.log('1')}/>
                <CalculationButton label="2" onPress={() => console.log('2')}/>
                <CalculationButton label="3" onPress={() => console.log('3')}/>
                <CalculationButton label="+" color={Color.orang} onPress={() => console.log('+')}/>
            </View>


            <View style={globalStyles.row}>
                <CalculationButton label="0" doubleSize onPress={() => console.log('0')}/>
                <CalculationButton label="." onPress={() => console.log('.')}/>
                <CalculationButton label="=" color={Color.orang} onPress={() => console.log('=')}/>
            </View>
        </View>
    );
};

export default CalculatorApp;
