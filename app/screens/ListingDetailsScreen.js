import { Image, View, StyleSheet } from "react-native";
import BodyText from "../components/AppText/BodyText";
import colors from "../config/colors";
import ListItem from "../components/list-item";

export default function ListingDetailsScreen({}) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Image style={styles.image} source={require("../assets/jacket.jpeg")} />
      <View style={styles.detailsContainer}>
        <BodyText style={styles.title}>Red jacket for sale</BodyText>
        <BodyText style={styles.price}>$100</BodyText>
        <ListItem
          image={require("../assets/face.jpeg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
