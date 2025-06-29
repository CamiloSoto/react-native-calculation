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

    const lastOperation = useRef<Operator | undefined>(null);

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(" ").at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number)
        }

    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult()
        setPrevNumber(`${subResult}`);
    }, [formula]);

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

    const setLastNumber = () => {
        calculateResult()
        if (number.endsWith(".")) {
            setPrevNumber(number.slice(0, -1))
        }

        setPrevNumber(number);
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.div;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.mul;
    }

    const subtrackOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.sub;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }


    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(" ");

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.sub:
                return num1 - num2;
            case Operator.mul:
                return num1 * num2;
            case Operator.div:
                return num1 / num2;
            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);


        lastOperation.current = undefined;
        setPrevNumber("0")
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
        calculateSubResult,
        deleteLastNumber,
        multiplyOperation,
        subtrackOperation,
        divideOperation,
        calculateResult,
        addOperation,
        buildNumber,
        toggleSign,
        clean
    }
}