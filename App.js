import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BodyText from "./app/components/AppText/BodyText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <MaterialCommunityIcons name="heart" size={20} color="red" />
      <BodyText>I love react native!</BodyText>
    </View>
  );
}
