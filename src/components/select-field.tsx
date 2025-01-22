import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { BaseSelectProps, SelectChangeEvent } from "@mui/material/Select";
import { Paper } from '@mui/material'

type SelectFieldProps = BaseSelectProps & {
  label: string;
  data?: string[];
  onChange: (event: SelectChangeEvent) => void;
};

export function SelectField({ label, data, ...rest }: SelectFieldProps) {
  const safeData = Array.isArray(data) ? data : []; 

  return (
          <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 20, 
        marginInline: 2,
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)", 
        border: "1px solid #ddd",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={label}
          sx={{
            borderRadius: 20,
          }}
          {...rest}
        >
          <MenuItem value={''}>Nenhum</MenuItem>
          {safeData?.map((i) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Paper>
  );
}
