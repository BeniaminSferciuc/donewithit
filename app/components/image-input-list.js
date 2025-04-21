import { ScrollView, StyleSheet, View } from "react-native";

import ImageInput from "./image-input";
import { useEffect, useRef } from "react";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({ animated: true })
        }
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.imageInputContainer}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageInputContainer: {
    marginRight: 10,
  },
});

export default ImageInputList;
