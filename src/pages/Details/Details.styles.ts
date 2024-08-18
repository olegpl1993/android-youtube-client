import { StyleSheet } from "react-native";
import { colors } from "../../shared/styles/variables";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },

  error: {
    textAlign: "center",
    padding: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },

  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  date: {
    fontSize: 14,
    width: "100%",
    fontWeight: "300",
    color: colors.gray,
    textAlign: "right",
  },

  image: {
    width: "100%",
    height: 200,
  },

  description: {
    fontSize: 16,
    color: colors.gray,
  },
});
