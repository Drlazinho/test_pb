import { useQuery } from "@tanstack/react-query";
import { getCardsPokemon } from "../api/get_cards_pokemon";
import { Box, Button, CircularProgress, FormControl } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Header } from "../components/header";
import { InputSearch } from "../components/input-search";
import { PokemonCard } from "../components/pokemon-card";
import { ChangeEvent, useState } from "react";
import { PokemonCardProps } from "../types/pokemon-card";
import { getTypes } from "../api/get_types";
import { SelectField } from "../components/select-field";
import { Delete } from "@mui/icons-material";

export function Principal() {
  const [filter, setFilter] = useState({
    type: "",
    name: "",
  });

  const { data: pokemonApiData, isLoading } = useQuery({
    queryKey: ["cards_pokemon", filter],
    queryFn: () => getCardsPokemon(filter).then((cards) => cards),
  });

  const { data: typeApiData } = useQuery({
    queryKey: ["types_pokemon"],
    queryFn: () => getTypes().then((res) => res.data),
  });

  const pokemonsList = pokemonApiData ? pokemonApiData.data : [];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  console.log(filter);

  const handleClear = () => {
    setFilter({
      type: "",
      name: "",
    });
  };

  return (
    <Box
      sx={{ width: "100vw", minHeight: "100vh", bgcolor: "background.default" }}
    >
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
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: {xs: "column", md: "row"},
            gap: 2,
            margin: "5rem 2rem 3rem",
          }}
        >
          <InputSearch
            sx={{
              minWidth: 200,
              maxWidth: "100%",
            }}
            placeholder="Pesquise o Pokemon"
            name="name"
            value={filter.name}
            onChange={handleChange}
            onClear={handleClear}
          />
          <SelectField
            sx={{
              minWidth: 200,
              maxWidth: "100%",
            }}
            label={"Selecione o Tipo"}
            data={typeApiData}
            value={filter.type}
            name="type"
            variant="outlined"
            onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
          />
          <Button type="reset" onClick={handleClear} endIcon={<Delete />}>
            Limpar
          </Button>
        </FormControl>

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
            {pokemonsList?.map((item: PokemonCardProps) => {
              return (
                <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <PokemonCard
                    image={item.images.small}
                    name={item.name}
                    rarity={item.rarity}
                    types={item.types}
                    cardItem={item}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
