import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/theme";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "rgba(0,0,0,0.1)" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          { backgroundColor: color },
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 6,
    height: 140,
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.9,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    color: Colors.primaryText,
    fontSize: 16,
    textAlign: "center",
  },
});
