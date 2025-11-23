import { useLayoutEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { Colors } from "../constants/theme";

export default function MealDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((m) => m.id === mealId);

  const handleHeaderButtonPress = useCallback(() => {
    // TODO: integrar lógica de favoritos (context / redux / async storage)
    console.log("toggle favorite:", mealId);
  }, [mealId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal ? selectedMeal.title : "Meal",
      headerRight: () => (
        <IconButton
          onPress={handleHeaderButtonPress}
          icon="star"
          color={Colors.primaryText}
          accessibilityLabel="Toggle favorite"
        />
      ),
    });
  }, [navigation, selectedMeal, handleHeaderButtonPress]);

  if (!selectedMeal) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFoundText}>No se encontró la receta.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      </View>

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.surface,
    paddingBottom: 16,
  },
  imageContainer: {
    width: "100%",
    height: 320,
    overflow: "hidden",
    backgroundColor: Colors.card,
  },
  image: { width: "100%", height: "100%" },
  title: {
    fontWeight: "700",
    fontSize: 22,
    marginTop: 12,
    marginHorizontal: 16,
    textAlign: "center",
    color: Colors.primaryText,
  },
  detailText: { color: Colors.mutedText },
  listOuterContainer: { alignItems: "center", marginTop: 12 },
  listContainer: { width: "90%", maxWidth: 800 },
  center: {
    flex: 1,
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  notFoundText: { color: Colors.mutedText },
});
