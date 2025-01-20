import { AppBar, Box, Link } from "@mui/material";
import { ThemeContextModal } from "./theme-context-modal";
import logo from "./../assets/logo.svg";

export function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        height: "145px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: 8,
      }}
    >
      <img src={logo} alt="Pokémon Logo" style={{ height: "4rem" }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Link variant="body1" href="www.google.com.br" underline="hover">
          Documentação
        </Link>
        <ThemeContextModal />
      </Box>
    </AppBar>
  );
}
