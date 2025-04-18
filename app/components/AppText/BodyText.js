import { Text } from "react-native";

import styles from "./styles";

export default function BodyText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
