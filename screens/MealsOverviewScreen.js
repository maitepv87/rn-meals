import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === catId);
    if (category) {
      navigation.setOptions({ title: category.title });
    }
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

const styles = StyleSheet.create({});
