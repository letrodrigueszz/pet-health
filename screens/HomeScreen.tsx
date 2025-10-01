import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, globalStyles } from "../styles/globalStyles";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        {/* <Text style={globalStyles.title}>Pet Health</Text> */}
        <Text style={globalStyles.subtitle}>
          <p></p>
          Inspirado por quem cuida com o coração.
        </Text>

        <Image
          source={require("assets/images/icon2.png")}
          style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            marginBottom: "auto",
            marginTop: 4,
          }}
        ></Image>
        <Text style={globalStyles.handwritten}>"You are so golden"</Text>

        <View style={{ width: "50%", marginTop: "auto" }}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => router.push("/list")}
          >
            <Text style={globalStyles.buttonText2}>Ver Meus Amores</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.button, { backgroundColor: colors.accent }]}
            onPress={() => router.push("/add")}
          >
            <Text style={globalStyles.buttonText}>Adicionar Novo Pet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
