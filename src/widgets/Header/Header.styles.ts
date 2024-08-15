import { StyleSheet } from "react-native";
import { colors } from "../../shared/styles/variables";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 5,
    padding: 10,
    paddingTop: 40,
    backgroundColor: "black",
  },

  logo: {
    width: 50,
    height: 50,
  },

  topRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 2,
    gap: 10,
  },

  settings: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "100%",
    borderWidth: 2,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  text: {
    fontSize: 20,
    color: "white",
  },

  select: {
    fontSize: 20,
    color: colors.primaryBlue,
  },

  seach: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },

  inputSeach: {
    fontSize: 20,
    width: 180,
    height: 35,
    backgroundColor: "white",
    padding: 5,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },

  input: {
    fontSize: 20,
    width: 150,
    height: 30,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 4,
  },

  button: {
    fontSize: 16,
    backgroundColor: colors.primaryBlue,
    color: "white",
    padding: 7,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
