import { globalStyles } from "@/styles/global-styles";
import { Text, TextProps } from "react-native";

//* 'TextProps' es un tipo de dato que se importa de 'react-native' y se utiliza para definir las propiedades que puede recibir el
//* componente 'Text' de React Native.En este caso, se utiliza para definir las propiedades que puede recibir el componente 'ThemeText'.
interface Props extends TextProps {
  variant?: "h1" | "h2";
}

//? Componente de texto personalizado que recibe un 'variant' como prop, el cual se utiliza para definir el estilo del texto para la
//? calculadora.
export const ThemeText = ({ children, variant = "h1", ...props }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
};
