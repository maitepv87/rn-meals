import { StyleSheet, View, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { Colors } from "../constants/theme";

export default function CategoriesScreen({ navigation }) {
  const handlePress = (id) => {
    navigation.navigate("MealsOverview", { categoryId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 12,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 12,
        }}
        renderItem={(itemData) => {
          return (
            <CategoryGridTile
              title={itemData.item.title}
              color={itemData.item.color}
              onPress={() => handlePress(itemData.item.id)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: Colors.surface },
});
