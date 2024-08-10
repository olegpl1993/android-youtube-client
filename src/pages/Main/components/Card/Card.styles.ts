import { StyleSheet } from "react-native";

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

  stats: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
  },

  statsItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 90,
    gap: 3,
  },

  title: {
    width: "90%",
    fontSize: 22,
    fontWeight: "bold",
    color: "rgb(80, 80, 80)",
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
