import { View } from "react-native";

import { useCalculator } from "@/hooks/useCalculator";

import { ThemeText } from "@/components/ThemeText";
import { CalculatorButton } from "@/components/CalculatorButton";

import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";


const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados calculadora */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText>{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"></ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* File de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={clean}
          label="C"
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          onPress={toggleSign}
          label="+/-"
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          onPress={deleteOperation}
          label="del"
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          onPress={divideOperation}
          label="÷"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" />
        <CalculatorButton
          onPress={multiplyOperation}
          label="x"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" />
        <CalculatorButton
          onPress={subtractOperation}
          label="-"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber("0")}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber(".")} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
