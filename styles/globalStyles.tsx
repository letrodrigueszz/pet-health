import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const isSmallDevice = width < 375; // iPhone SE e similares
const isMediumDevice = width < 414; // iPhone 8 e similares

// A paleta de cores do design "Toque Dourado"
export const colors = {
  background: "#FFFBEB", // Creme
  primary: "#FBBF24", // Amarelo dourado
  accent: "#D97706", // Laranja escuro
  text: "#78350F", // Castanho escuro
  textSecondary: "#92400E",
  card: "#FFFFFF",
  error: "#EF4444",
  shadow: "#A7A7A7",
  red: "#ff0000",
};

// Funções auxiliares para responsividade
const scaleSize = (size: number) => {
  const scaleFactor = isSmallDevice ? 0.85 : isMediumDevice ? 0.92 : 1;
  return size * scaleFactor;
};

const scaleFont = (size: number) => {
  const scaleFactor = isSmallDevice ? 0.9 : isMediumDevice ? 0.95 : 1;
  return size * scaleFactor;
};

export const globalStyles = StyleSheet.create({
  // --- Containers ---
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scaleSize(20),
    paddingVertical: scaleSize(30),
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: scaleSize(16),
    paddingVertical: scaleSize(20),
  },

  // --- Textos ---
  title: {
    marginTop: 2,
    fontSize: scaleFont(40),
    fontFamily: "Lora-Bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: scaleSize(8),
    lineHeight: scaleFont(44),
  },
  subtitle: {
    fontSize: scaleFont(25),
    fontFamily: "Nunito-Regular",
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: "auto",
    lineHeight: scaleFont(30),
  },
  handwritten: {
    fontFamily: "Caveat-Bold",
    fontSize: scaleFont(32),
    color: colors.accent,
    marginVertical: scaleSize(1),
    lineHeight: scaleFont(36),
  },

  // --- Botões ---
  button: {
    backgroundColor: colors.primary,
    paddingVertical: scaleSize(14),
    paddingHorizontal: scaleSize(20),
    borderRadius: 99,
    alignItems: "center",
    marginVertical: scaleSize(8),
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: scaleSize(4) },
    shadowOpacity: 0.3,
    shadowRadius: scaleSize(5),
    elevation: 6,
    minHeight: scaleSize(50),
    justifyContent: "center",
  },
  buttonText: {
    color: colors.card,
    fontSize: scaleFont(18),
    fontFamily: "Nunito-Bold",
    fontWeight: "bold",
    textAlign: "center",
    includeFontPadding: false,
  },
  buttonText2: {
    color: colors.textSecondary,
    fontSize: scaleFont(18),
    fontFamily: "Nunito-Bold",
    fontWeight: "bold",
    marginBottom: scaleSize(1),
    textAlign: "center",
  },

  // --- Floating Action Button (FAB) ---
  fab: {
    position: "absolute",
    bottom: scaleSize(20),
    right: scaleSize(20),
    width: scaleSize(56),
    height: scaleSize(56),
    borderRadius: scaleSize(28),
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: scaleSize(4) },
    shadowOpacity: 0.4,
    shadowRadius: scaleSize(6),
    elevation: 8,
  },

  // --- Formulário ---
  label: {
    fontSize: scaleFont(15),
    fontFamily: "Nunito-Bold",
    color: colors.textSecondary,
    marginBottom: scaleSize(6),
    lineHeight: scaleFont(20),
  },
  input: {
    backgroundColor: colors.card,
    paddingHorizontal: scaleSize(14),
    paddingVertical: scaleSize(12),
    borderRadius: scaleSize(10),
    fontSize: scaleFont(16),
    fontFamily: "Nunito-Regular",
    marginBottom: scaleSize(16),
    borderWidth: 1,
    borderColor: "#FDE68A",
    minHeight: scaleSize(48),
  },
  errorText: {
    color: colors.error,
    fontFamily: "Nunito-Regular",
    fontSize: scaleFont(14),
    marginBottom: scaleSize(12),
    textAlign: "center",
    lineHeight: scaleFont(18),
  },

  // --- Lista e Cards ---
  listContainer: {
    paddingHorizontal: scaleSize(6),
  },
  petNameHandwritten: {
    fontFamily: "Caveat-Bold",
    fontSize: scaleFont(24),
    textAlign: "center",
    color: colors.text,
    marginTop: scaleSize(6),
    lineHeight: scaleFont(28),
  },

  // --- Novos estilos para melhor responsividade ---
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: scaleSize(20),
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: scaleSize(12),
    padding: scaleSize(16),
    marginVertical: scaleSize(6),
    marginHorizontal: scaleSize(8),
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: scaleSize(2) },
    shadowOpacity: 0.1,
    shadowRadius: scaleSize(3),
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallText: {
    fontSize: scaleFont(12),
    fontFamily: "Nunito-Regular",
    color: colors.textSecondary,
  },
  mediumText: {
    fontSize: scaleFont(16),
    fontFamily: "Nunito-Regular",
    color: colors.text,
    lineHeight: scaleFont(20),
  },
});

// Estilos específicos para dispositivos pequenos
export const smallDeviceStyles = {
  // Overrides para dispositivos muito pequenos
  extraSmallPadding: {
    paddingHorizontal: scaleSize(12),
  },
  compactButton: {
    paddingVertical: scaleSize(10),
    minHeight: scaleSize(44),
  },
  smallTitle: {
    fontSize: scaleFont(32),
    lineHeight: scaleFont(36),
  },
  smallSubtitle: {
    fontSize: scaleFont(20),
    lineHeight: scaleFont(24),
  },
};

// Hook personalizado para responsividade (se estiver usando React Native com hooks)
export const useResponsiveStyles = () => {
  return {
    scaleSize,
    scaleFont,
    isSmallDevice,
    isMediumDevice,
    windowWidth: width,
    windowHeight: height,
  };
};
