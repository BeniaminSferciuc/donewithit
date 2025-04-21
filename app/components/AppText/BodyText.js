import { Text } from "react-native";

import defaultStyles from "../../config/styles";

export default function BodyText({ children, style, ...rest }) {
  return (
    <Text style={[defaultStyles.text, style]} {...rest}>
      {children}
    </Text>
  );
}
