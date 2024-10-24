import { StyleSheet } from "react-native";

export const boxShadow = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
