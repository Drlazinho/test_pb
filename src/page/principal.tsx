import { useQuery } from "@tanstack/react-query";
import { getCardsPokemon } from "../api/get_cards_pokemon";
import { Box, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Header } from "../components/header";
import { InputSearch } from "../components/input-search";
import { PokemonCard } from "../components/pokemon-card";

export function Principal() {
  const {
    data: dataApi,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cards_pokemon"],
    queryFn: getCardsPokemon,
  });

  const pokemonsList = dataApi ? dataApi.data : [];

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", bgcolor: "background.default" }}>
      <Grid
        component="main"
        sx={{
          margin: "auto",
          height: "100%",
          maxWidth: "1440px",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5rem 2rem 3rem",
          }}
        >
          <InputSearch />
          <InputSearch />
        </Box>

        {/* <Typography>Total: 150 Pokémons</Typography> */}

        <Box sx={{ width: "100%", paddingInline: 4 }}>

          {isLoading && (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: 2,
              }}
            >
              <CircularProgress />
            </Box>
          )}

          <Grid container columnSpacing={4} rowSpacing={3}>
            {pokemonsList.map((item, index) => {
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <PokemonCard image={item.images.small} name={item.name} rarity={item.rarity} types={item.types} cardItem={item}/>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
