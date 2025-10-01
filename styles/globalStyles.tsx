import { StyleSheet } from 'react-native';

// A paleta de cores do design "Toque Dourado"
export const colors = {
  background: '#FFFBEB', // Creme
  primary: '#FBBF24',    // Amarelo dourado
  accent: '#D97706',     // Laranja escuro
  text: '#78350F',       // Castanho escuro
  textSecondary: '#92400E',
  card: '#FFFFFF',
  error: '#EF4444',
  shadow: '#A7A7A7',
  red:'#ff0000'
};

export const globalStyles = StyleSheet.create({
  // --- Containers ---
  container: {
    flex:1,
    backgroundColor: colors.background,
    height:'auto',
    width:'auto'
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin:'auto'
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },

  // --- Textos ---
  title: {
    fontSize: 40,
    fontFamily: 'Lora-Bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'Nunito-Regular',
    color: colors.textSecondary,
    textAlign: 'center',
    
    marginTop:'auto',
  },
  handwritten: {
    fontFamily: 'Caveat-Bold',
    fontSize: 32,
    color: colors.accent,
    marginVertical:1
  },

  // --- Botões ---
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 99, // Totalmente arredondado
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom:5,
  },
  buttonText: {
    color: colors.card,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    margin:'auto',
    fontWeight:'bold',
  },
  buttonText2: {
    color: colors.textSecondary,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    fontWeight:'bold',
    marginBottom:1,
  },
  
  // --- Floating Action Button (FAB) ---
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },

  // --- Formulário ---
  label: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: colors.textSecondary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FDE68A', // Borda amarela clara
  },
  errorText: {
    color: colors.error,
    fontFamily: 'Nunito-Regular',
    marginBottom: 15,
    textAlign: 'center',
  },

  // --- Lista e Cards ---
  listContainer: {
    paddingHorizontal: 8,
  },
  petNameHandwritten: {
    fontFamily: 'Caveat-Bold',
    fontSize: 26,
    textAlign: 'center',
    color: colors.text,
    marginTop: 8,
  },
});