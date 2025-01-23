import {
  InputBase,
  InputBaseProps,
  IconButton,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Close } from '@mui/icons-material'

type InputProps = InputBaseProps & {
  onClear: () => void
}

export function InputSearch({ placeholder, onClear, value, ...rest }: InputProps) {
  return (
    <FormControl
    fullWidth
    sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 4px 6px 10px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          marginLeft: 1,
          padding: 1,
        }}
        value={value}
        {...rest}
        placeholder={placeholder}
      />

      <IconButton type='button' sx={{ padding: 1 }} onClick={onClear}>
        {value ? <Close /> : <SearchIcon />}
      </IconButton>
    </FormControl>
  );
}
