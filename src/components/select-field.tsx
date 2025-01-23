import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { BaseSelectProps, SelectChangeEvent } from "@mui/material/Select";
import { IconTypesList } from "./icon-types-list";
import Typography from "@mui/material/Typography";

type SelectFieldProps = BaseSelectProps & {
  label: string;
  data?: string[];
  useIcon?: boolean;
  value?: string | number | undefined;
  onChange: (event: SelectChangeEvent) => void;
};

export function SelectField({ label, data, useIcon, ...rest }: SelectFieldProps) {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label={label}
        {...rest}
      >
        <MenuItem value="">
          <Typography>Nenhum</Typography>
        </MenuItem>
        {safeData.map((i) => (
          <MenuItem
            key={i}
            value={i}
            sx={{ display: "flex", alignItems: "center", flexDirection: 'row', gap: 2 }} 
          >
            {useIcon && (
              <IconTypesList types={i} size={20} />
            )}
            <Typography>{i}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
