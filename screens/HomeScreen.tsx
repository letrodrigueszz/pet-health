import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles, colors } from '../styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        
        <FontAwesome5 name="heart" size={80} color={colors.primary} style={{ marginBottom: 20 }} solid />

        <Text style={globalStyles.title}>Pet Health</Text>
        <Text style={globalStyles.subtitle}>Inspirado por quem cuida com o coração.</Text>
        <Text style={globalStyles.handwritten}>"you're so golden"</Text>

        <View style={{ width: '100%', marginTop: 50 }}>
          <TouchableOpacity style={globalStyles.button} onPress={() => router.push('/list')}>
            <Text style={globalStyles.buttonText}>Ver Meus Amores</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[globalStyles.button, { backgroundColor: colors.accent }]} 
            onPress={() => router.push('/add')}
          >
            <Text style={globalStyles.buttonText}>Adicionar Novo Pet</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

