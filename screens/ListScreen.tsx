import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { usePets } from '../context/PetContext';
import { colors, globalStyles } from '../styles/globalStyles';

// Card no estilo Polaroid
const PetCard = ({ pet }) => (
  <View style={styles.cardContainer}>
    <TouchableOpacity onLongPress={() => alert(`Espécie: ${pet.especie}`)} style={styles.polaroid}>
      <Image 
        source={require('..//assets//images/icon2.png')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginBottom: "auto",
            justifyContent:'center',
            alignItems:'center'
          }}
        
      />
    </TouchableOpacity>
    <Text style={globalStyles.petNameHandwritten}>{pet.nome}</Text>
  </View>
);

export default function ListScreen() {
  const { pets } = usePets();
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.container}>
      {pets.length === 0 ? (
        <View style={globalStyles.centerContainer}>
          <Text style={globalStyles.subtitle}>Nenhum pet registado ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={pets}
          renderItem={({ item }) => <PetCard pet={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2} // Essencial para a grelha
          contentContainerStyle={globalStyles.listContainer}
        />
      )}

      {/* Botão Flutuante (FAB) para Adicionar Pet */}
      <TouchableOpacity
        style={globalStyles.fab}
        onPress={() => router.push("/add")}
      >
        <FontAwesome5 name="plus" size={24} color={colors.card} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Estilos locais para o card Polaroid
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  polaroid: {
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 20,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  petImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#eee",
  },
});