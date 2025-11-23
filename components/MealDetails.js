import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../constants/theme";

export default function MealDetails({
  complexity = "",
  duration = 0,
  affordability = "",
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration} min</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {typeof complexity === "string" ? complexity.toUpperCase() : ""}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {typeof affordability === "string" ? affordability.toUpperCase() : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
     marginHorizontal: 6,
    fontSize: 12,
    color: Colors.mutedText,
  },
});
