import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function InputSearch() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 400,
        padding: "2px 4px",
        borderRadius: "25px", 
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
        placeholder="Pesquise um pokemon"
        inputProps={{ "aria-label": "pesquise um pokemon" }}
      />
      <IconButton type="submit" sx={{ padding: 1 }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
