import { Pressable, Text } from "react-native";
import * as Haptics from "expo-haptics";

import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";

//* 'Hactics' nos permite utilizar la vibración del dispositivo, en este caso estamos utilizando 'selectionAsync()' que nos permite
//* vibrar el dispositivo como si se hubiera seleccionado algo.

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
