import { TouchableOpacity, StyleSheet } from "react-native";

import BodyText from "./AppText/BodyText";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <BodyText style={styles.text}>{item.label}</BodyText>;
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
