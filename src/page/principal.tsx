import { useQuery } from "@tanstack/react-query";
import { FilterPokemonProps, getCardsPokemon } from "../api/get_cards_pokemon";
import { Box, Button, FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Header } from "../components/header";
import { InputSearch } from "../components/input-search";
import { PokemonCard } from "../components/pokemon-card";
import { ChangeEvent, useState } from "react";
import { PokemonCardProps } from "../types/pokemon-card";
import { getTypes } from "../api/get_types";
import { SelectField } from "../components/select-field";
import { Delete } from "@mui/icons-material";
import { getRarities } from "../api/get_rarities";
import { getSupertypes } from "../api/get_supertypes";
import PaginationRounded from "../components/pagination-rounded";
import pokebola from "./../assets/pokebola.png";
import pikachuLoading from "./../assets/pikachu.webp";
import pikachuError from "./../assets/pikachuError.gif";
import { motion } from "motion/react";
export function Principal() {
  const [filter, setFilter] = useState<FilterPokemonProps>({
    types: "",
    name: "",
    rarity: "",
    supertype: "",
    page: 1,
    pageSize: 20,
  });

  const {
    data: pokemonApiData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cards_pokemon", filter],
    queryFn: () => getCardsPokemon(filter).then((cards) => cards),
  });

  const { data: typeApiData } = useQuery({
    queryKey: ["types_pokemon"],
    queryFn: () => getTypes().then((res) => res.data),
  });

  const { data: raritiesApiData } = useQuery({
    queryKey: ["rarities_pokemon"],
    queryFn: () => getRarities().then((res) => res.data),
  });

  const { data: supertypesApiData } = useQuery({
    queryKey: ["supertypes_pokemon"],
    queryFn: () => getSupertypes().then((res) => res.data),
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
      ...filter,
      types: "",
      name: "",
      rarity: "",
      supertype: "",
      page: 1,
    });
  };

  const handleClearInput = () => {
    setFilter({
      ...filter,
      name: "",
      page: 1,
    });
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setFilter({
      ...filter,
      page: value,
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
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            margin: { xs: "2rem 2rem 1.5rem", md: "5rem 2rem 3rem" },
          }}
        >
          <InputSearch
            sx={{
              minWidth: 200,
              maxWidth: "100%",
            }}
            placeholder="Search Pokémon"
            name="name"
            value={filter.name}
            onChange={handleChange}
            onClear={handleClearInput}
          />
          <SelectField
            sx={{
              minWidth: 200,
              maxWidth: "100%",
            }}
            label={"Select Type"}
            data={typeApiData}
            value={filter.types}
            useIcon
            name="types"
            variant="outlined"
            onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
          />
          <SelectField
            sx={{
              minWidth: 200,
              maxWidth: "100%",
            }}
            label={"Select Rarities"}
            data={raritiesApiData}
            value={filter.rarity}
            name="rarity"
            variant="outlined"
            onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
          />
          <SelectField
            sx={{
              minWidth: 200,
              maxWidth: "100%",
            }}
            label={"Select Supertypes"}
            data={supertypesApiData}
            value={filter.supertype}
            name="supertype"
            variant="outlined"
            onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
          />
          <SelectField
            sx={{
              minWidth: 40,
              maxWidth: "100%",
            }}
            label={"Select Item/page"}
            data={[10, 20, 40, 100]}
            value={filter.pageSize}
            name="pageSize"
            variant="outlined"
            onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
          />
          <Button type="reset" onClick={handleClear} endIcon={<Delete />}>
            Limpar
          </Button>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 2,
            gap: 1,
          }}
        >
          <Typography textAlign={"center"}>
            Total: {pokemonApiData?.totalCount ?? 0} Itens{" "}
          </Typography>
          <img src={pokebola} width={20} alt="" />
        </Box>

        <Box sx={{ width: "100%", paddingInline: 4 }}>
          {isLoading && (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: 2,
              }}
            >
              <img src={pikachuLoading} />
              <Typography variant="h5" textAlign={"center"}>
                Searching Pokémons...
              </Typography>
            </Box>
          )}
          {isError && (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: 2,
              }}
            >
              <img src={pikachuError} />
              <Typography variant="h5" textAlign={"center"} color="error">
                Error - Um dos pokémons desapereceu enquanto realizavamos a
                contagem. <br />
                Tente novamente mais tarde.
              </Typography>
            </Box>
          )}

          <Grid container columnSpacing={4} rowSpacing={3}>
            {pokemonsList?.map((item: PokemonCardProps, index: number) => {
              return (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  sx={{ overflow: "hidden" }}
                >
                  <motion.div
                    animate={{ scale: [0.25, 1.02, 1] }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeInOut", 
                    }}
                  >
                    <PokemonCard
                      image={item.images.small}
                      name={item.name}
                      rarity={item.rarity}
                      types={item.types}
                      cardItem={item}
                      hp={item.hp}
                    />
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBlock: 2,
          }}
        >
          <PaginationRounded
            count={Math.ceil(
              pokemonApiData?.totalCount / pokemonApiData?.pageSize
            )}
            handleChangePage={handleChangePage}
          />
        </Box>

        <Box sx={{ marginBlock: 2}}>
          <Typography variant={'subtitle2'} textAlign={'center'}>Desenvolvido por Lázaro Pimentel - 2025</Typography>
        </Box>
      </Grid>
    </Box>
  );
}
