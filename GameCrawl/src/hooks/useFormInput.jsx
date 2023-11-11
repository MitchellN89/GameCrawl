import { useState } from "react";

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function reset() {
    setValue("");
  }

  const props = {
    value: value,
    onChange: handleChange,
    reset,
  };

  return [props, reset];
}
