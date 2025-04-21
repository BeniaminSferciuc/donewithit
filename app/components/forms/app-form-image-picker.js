import { useFormikContext } from "formik";

import ImageInputList from "../image-input-list";
import ErrorMessage from "./error-message";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imagesUris = values[name];

  const handleAdd = (uri) => setFieldValue(name, [...imagesUris, uri]);
  const handleRemove = (uri) =>
    setFieldValue(
      name,
      imagesUris.filter((image) => image !== uri)
    );

  return (
    <>
      <ImageInputList
        imageUris={imagesUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
