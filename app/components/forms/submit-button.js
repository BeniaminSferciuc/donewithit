import { useFormikContext } from "formik";

import AppButton from "../app-button";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}
