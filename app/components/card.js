import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import BodyText from "./AppText/BodyText";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <BodyText style={styles.title}>{title}</BodyText>
        <BodyText style={styles.subTitle}>{subTitle}</BodyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginButton: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
