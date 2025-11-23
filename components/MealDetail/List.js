import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/theme";

export default function List({ data = [] }) {
  if (!data || data.length === 0) return null;
  return data.map((dataPoint, index) => (
    <View
      style={styles.listItem}
      key={`${index}-${String(dataPoint).slice(0, 20)}`}
    >
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 6,
    backgroundColor: Colors.categorySoftYellow,
    alignSelf: "stretch",
  },
  itemText: {
    color: Colors.header,
    textAlign: "center",
  },
});
