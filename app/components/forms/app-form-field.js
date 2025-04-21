import { useFormikContext } from "formik";

import AppTextInput from "../app-text-input";
import ErrorMessage from "./error-message";

export default function AppFormField({ name, width, ...otherProps }) {
  const { errors, setFieldTouched, touched, handleChange } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
