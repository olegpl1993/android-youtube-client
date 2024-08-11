import { StyleSheet } from "react-native";
import { colors } from "../../../../shared/styles/variables";

export const styles = StyleSheet.create({
  card: {
    position: "relative",
    display: "flex",
    width: "100%",
    backgroundColor: "rgb(230, 230, 230)",
    borderRadius: 10,
    elevation: 3,
  },

  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    width: "90%",
    fontSize: 22,
    fontWeight: "bold",
    color: colors.gray,
    textAlign: "center",
  },

  buttonContainer: {
    width: 200,
  },

  dateColorRow: {
    width: "100%",
    height: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
