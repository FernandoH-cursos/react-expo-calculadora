import { View, Text, Platform } from "react-native";

import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";


import { globalStyles } from "@/styles/global-styles";



//* <Slot/> nos permite renderizar los componentes hijos que se le pasen en el archivo que lo importe, es util en los layouts para
//* renderizar los componentes hijos que se le pasen en el archivo que lo importe.

//* useFonts() nos permite cargar las fuentes que necesitemos en nuestra aplicación, en este caso estamos cargando la fuente
//* SpaceMono - Regular.ttf que se encuentra en la carpeta assets/fonts. 'loaded' es un booleano que nos indica si la fuente se ha
//* cargado correctamente.

//* <StatusBar/> nos permite configurar el estilo de la barra de estado de la aplicación, en este caso estamos utilizando el estilo
//* 'light' que nos permite tener la barra de estado con texto blanco(los iconos como la batería, la señal, etc. se colorean blanco).

//* 'NavigationBar' nos permite configurar la barra de navegación de la aplicación (el menú de navegación de Android solamente), que sería
//* como el footer de la aplicación. 'setBackgroundColorAsync()' nos permite cambiar el color de fondo de la barra de navegación de la app.

//* 'Platform' nos permite obtener información sobre la plataforma en la que se está ejecutando la aplicación, en este caso estamos
//* obteniendo el SO android en el que se está ejecutando la aplicación y lo guardamos en la constante 'isAndroid'.
const isAndroid = Platform.OS === "android";

isAndroid && NavigationBar.setBackgroundColorAsync("#1E1E1E");

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <Text>Header</Text>

      <Slot />

      <StatusBar style="light"/>
    </View>
  );
};

export default RootLayout;
