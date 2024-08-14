import { StyleSheet } from "react-native";
import { colors } from "../../../../shared/styles/variables";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 30,
  },

  button: {
    fontSize: 16,
    backgroundColor: colors.primaryBlue,
    color: "white",
    padding: 8,
    borderRadius: 4,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
