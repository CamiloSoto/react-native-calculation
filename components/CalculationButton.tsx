import {Pressable, Text} from "react-native";
import {globalStyles} from "@/styles/global-styles";
import {Color} from "@/constants/Color";

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const CalculationButton = ({
                               label,
                               color = Color.dartGray,
                               blackText = false,
                               doubleSize = false,
                               onPress
                           }: Props) => {
    return (
        <Pressable style={({pressed}) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.8 : 1,
            width: doubleSize ? 140 : 60

        })} onPress={onPress}>
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white'
                }}
            >
                {label}
            </Text>
        </Pressable>
    );
};

export default CalculationButton;
