import { useQuery } from "@tanstack/react-query";
import { getCardsPokemon } from "../api/get_cards_pokemon";
import {
  Box,
  Grid2,
} from "@mui/material";
import { Header } from "../components/header";

export function Principal() {

  const { data } = useQuery({
    queryKey: ["cards_pokemon"],
    queryFn: getCardsPokemon,
  });

  return (
    <Box sx={{ width: "100vw", bgcolor: "background.default" }}>
      <Grid2
        container
        component="main"
        sx={{
          margin: "auto",
          height: "100vh",
          maxWidth: "1440px",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Header />
      </Grid2>
    </Box>
  );
}
