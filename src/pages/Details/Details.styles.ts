import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    gap: 5,
  },

  loader: {
    textAlign: "center",
    padding: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
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
});
