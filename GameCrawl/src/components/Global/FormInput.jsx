import { FormControl, InputLabel, Input } from "@mui/material";

export default function FormInput({
  label,
  id,
  type,
  value,
  onChange,
  width = "auto",
}) {
  return (
    <FormControl sx={{ marginBottom: "10px", width: width }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} type={type} value={value} onChange={onChange} />
    </FormControl>
  );
}
