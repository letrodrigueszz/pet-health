import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PetProvider } from "../context/PetContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Lora-Bold": require("../assets/fonts/Lora-Bold.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Caveat-Bold": require("../assets/fonts/Caveat-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PetProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#D97706", // Laranja escuro
            
          },
          headerTintColor: "#FFFBEB", // Creme
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Lora-Bold",
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Pet Health ",
            headerTitleStyle: {
              fontSize: 35,
              fontFamily: 'Lora-Bold',
              
              
            },
          }}
        />
        <Stack.Screen name="list" options={{ title: "Meus Amores" }} />
        <Stack.Screen name="add" options={{ title: "Adicionar Novo Pet" }} />
      </Stack>
    </PetProvider>
  );
}
