import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Definimos o "formato" de um Pet
interface Pet {
  id: string;
  nome: string;
  especie: string;
  dataNasc?: string; // O '?' torna a data de nascimento opcional
}

// 2. Definimos o "formato" dos dados que o nosso Contexto vai ter
interface PetContextData {
  pets: Pet[];
  addPet: (pet: Omit<Pet, 'id'>) => void;
  deletePet: (petId: string) => void;
}

// 3. Criamos o Contexto, informando a ele o formato que definimos acima
const PetContext = createContext<PetContextData>({} as PetContextData);

// O resto do arquivo continua como estava, mas agora com os tipos corretos
export const PetProvider = ({ children }: { children: ReactNode }) => {
  const [pets, setPets] = useState<Pet[]>([
    { id: '1', nome: 'Bolinha', especie: 'Cachorro', dataNasc: '01/01/2020' },
    { id: '2', nome: 'Frajola', especie: 'Gato', dataNasc: '05/03/2022' },
  ]);

  const addPet = (pet: Omit<Pet, 'id'>) => {
    setPets(prevPets => [...prevPets, { id: Date.now().toString(), ...pet }]);
  };

  const deletePet = (petId: string) => {
    setPets(prevPets => prevPets.filter(pet => pet.id !== petId));
  };

  return (
    <PetContext.Provider value={{ pets, addPet, deletePet }}>
      {children}
    </PetContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const usePets = () => {
  return useContext(PetContext);
};