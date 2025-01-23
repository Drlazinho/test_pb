import {
  AppBar,
  Box,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeContextModal } from "./theme-context-modal";
import logo from "./../assets/logo.svg";
import { Notes } from "@mui/icons-material";

export function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        height: { xs: "6rem", md: "8rem" },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: { xs: 2, md: 8 },
      }}
    >
      <img src={logo} alt="Pokémon Logo" style={{ height: "4rem" }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Link variant="body1" href="www.google.com.br" underline="hover">
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Documentação
          </Typography>
          <Tooltip title="Delete" sx={{
              display: { md: "none" },
          }}>
            <IconButton>
              <Notes />
            </IconButton>
          </Tooltip>
        </Link>

        <ThemeContextModal />
      </Box>
    </AppBar>
  );
}
