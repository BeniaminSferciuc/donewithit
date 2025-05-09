import { StyleSheet } from "react-native";

import BodyText from "../AppText/BodyText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <BodyText style={styles.error}>{error}</BodyText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
