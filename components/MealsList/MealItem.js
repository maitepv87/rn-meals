import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "../MealDetails";
import { Colors } from "../../constants/theme";

export default function MealItem({
  id,
  title,
  imageUrl,
  complexity,
  duration,
  affordability,
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MealDetail", { mealId: id });
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "rgba(0,0,0,0.06)" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>

          <Text style={styles.title}>{title}</Text>

          <MealDetails
            complexity={complexity}
            duration={duration}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
  },
  pressed: {
    opacity: 0.96,
  },
  innerContainer: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 8,
    color: Colors.primaryText,
  },
});
