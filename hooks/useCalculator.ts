import {useEffect, useRef, useState} from "react";

enum Operator {
    add = '+',
    sub = '-',
    mul = '*',
    div = '/'
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        // TODO: calculate sub result
        setFormula(number);
    }, [number]);

    const clean = () => {
        setNumber("0");
        setPrevNumber("0");
        setFormula("0");

        lastOperation.current = undefined;
    }

    const toggleSign = () => {
        if (number.startsWith('-')) {
            return setNumber(number.replace('-', ''));
        } else {
            return setNumber(`-${number}`);
        }
    }

    const deleteLastNumber = () => {
        let currentSign = '';
        let temporalNumber = number;
        if (number.includes("-")) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber("0")
    }


    const buildNumber = (numberString: string) => {

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith("-0")) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }
            if (numberString === "0" && number.includes(".")) {
                return setNumber(number + numberString);
            }
            if (numberString !== "0" && !number.includes(".")) {
                return setNumber(numberString);
            }

            if (numberString === "0" && !number.includes(".")) {
                return;
            }
        }
        setNumber(prevNumber => prevNumber + numberString);
    }

    return {
        formula,
        number,
        prevNumber,
        deleteLastNumber,
        buildNumber,
        toggleSign,
        clean
    }
}