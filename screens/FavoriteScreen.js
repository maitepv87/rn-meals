import { StyleSheet, View, Text } from "react-native";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>FavoriteScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#3f2f25" },
});
