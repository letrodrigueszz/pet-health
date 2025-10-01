import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { usePets } from '../context/PetContext';
import { globalStyles, colors } from '../styles/globalStyles';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  
  const router = useRouter();
  const { addPet } = usePets();

  const handleSubmit = () => {
    if (!nome.trim() || !especie.trim()) {
      setError('O nome e a espécie são obrigatórios.');
      return;
    }
    
    addPet({ nome, especie, dataNasc, imageUrl });
    Alert.alert('Sucesso!', 'Novo pet registado com amor.');
    router.back();
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={globalStyles.formContainer}>
            
            <View>
              <Text style={globalStyles.label}>Nome do Pet</Text>
              <TextInput 
                style={globalStyles.input} 
                value={nome} 
                onChangeText={setNome} 
                placeholder="Como se chama o seu amor?" 
                placeholderTextColor="#e84f30ff"
              />
              
               <Text style={globalStyles.label}>URL da Foto</Text>
              <TextInput 
                style={globalStyles.input} 
                value={imageUrl} 
                onChangeText={setImageUrl} 
                placeholder="Cole aqui o link da foto" 
                placeholderTextColor="#e84f30ff"
              />

              <Text style={globalStyles.label}>Espécie</Text>
              <TextInput 
                style={globalStyles.input} 
                value={especie} 
                onChangeText={setEspecie} 
                placeholder="Ex: Cão, Gato..." 
                placeholderTextColor="#e84f30ff"
              />

              <Text style={globalStyles.label}>Data de Nascimento (opcional)</Text>
              <TextInput 
                style={globalStyles.input} 
                value={dataNasc} 
                onChangeText={setDataNasc} 
                placeholder="DD/MM/AAAA" 
                placeholderTextColor="#e84f30ff"
              />
            </View>

            {error ? <Text style={globalStyles.errorText}>{error}</Text> : null}
            
            <View style={{ marginTop: 'auto', paddingBottom: 20 }}>
              <TouchableOpacity 
                style={[globalStyles.button, {backgroundColor: colors.accent}]} 
                onPress={handleSubmit}
              >
                <Text style={globalStyles.buttonText}>Salvar Pet</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

