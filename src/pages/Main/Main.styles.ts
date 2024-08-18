import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },

  error: {
    textAlign: "center",
    padding: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
