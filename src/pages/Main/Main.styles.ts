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

  loader: {
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

  card: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: 5,
    padding: 20,
    backgroundColor: "rgb(230, 230, 230)",
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 200,
  },
});
