import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/screen";
import CategoryPickerItem from "../components/category-picker-item";
import FormImagePicker from "../components/forms/app-form-image-picker";
import { useEffect, useState } from "react";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().moreThan(0).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Toys", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Books", value: 3, backgroundColor: "blue", icon: "camera" },
  {
    label: "Electronics",
    value: 4,
    backgroundColor: "yellow",
    icon: "headphones",
  },
  {
    label: "Furniture",
    value: 5,
    backgroundColor: "orange",
    icon: "headphones",
  },
  { label: "Toys", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Books", value: 3, backgroundColor: "blue", icon: "camera" },
  {
    label: "Electronics",
    value: 4,
    backgroundColor: "yellow",
    icon: "headphones",
  },
  {
    label: "Furniture asasfdasf",
    value: 5,
    backgroundColor: "orange",
    icon: "headphones",
  },
];

export default function ListingEditScreen() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") return;

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      setLocation({ latitude, longitude });
    };

    getLocation();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
