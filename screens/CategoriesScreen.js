import { StyleSheet, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  const handlePress = (id) => {
    console.log("handlePress id:", id);
    navigation.navigate("MealsOverview", { categoryId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          console.log("renderItem item:", itemData.item.id);
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
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
