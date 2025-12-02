import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";
import { Colors } from "../../constants/theme";

export default function MealsList({ items }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={(itemData) => (
          <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.surface,
  },
});
