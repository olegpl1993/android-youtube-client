import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: 5,
  },

  body: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    borderColor: "red",
    borderWidth: 2,
    gap: 20,
    backgroundColor: "white",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },

  button: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    width: 100,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  count: {
    color: "red",
    fontSize: 30,
  },
});
