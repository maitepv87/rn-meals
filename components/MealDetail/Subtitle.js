import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/theme";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    paddingVertical: 6,
    marginVertical: 6,
    borderBottomColor: Colors.categorySoftYellow,
    borderBottomWidth: 2,
    alignItems: "center",
  },
  subtitle: {
    color: Colors.categorySoftYellow,
    fontSize: 18,
    fontWeight: "700",
  },
});
