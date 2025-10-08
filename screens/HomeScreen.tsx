import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        {/* Logo */}
        <Text style={globalStyles.title}>
          Inspirado por quem cuida com o coração
        </Text>
        <Image
          source={require("../assets/icon.png")} // ✅ Caminho correto
          style={{
            width: 100,
            height: 100, // Ajustado para quadrado
            marginBottom: 20,
          }}
          resizeMode="contain"
        />

        <Text style={globalStyles.handwritten}>You're so golden</Text>

        {/* <Text style={globalStyles.subtitle}>
          Gerencie a saúde do seu pet de forma simples
        </Text> */}

        {/* Botão Principal */}
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => router.push("/list")}
        >
          <Text style={globalStyles.buttonText}>Ver Meus Amores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => router.push("/add")}
        >
          <Text style={globalStyles.buttonText}>Adicionar Novo Pet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
