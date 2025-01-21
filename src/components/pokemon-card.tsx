import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { PokemonCardProps } from '../types/pokemon-card'
import { useState } from 'react'
import ModalPokemonDetail from './modal-pokemon-detail'

interface ICardProps {
  cardItem?: PokemonCardProps | undefined
  name?: string
  types?: string[]
  rarity?: string
  image?: string
}

export interface TypesListProps {
  types: string;
}

function TypesList({ types }: TypesListProps) {
  switch (types) {
    case "Colorless":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/colorless.png" />}
          label={types}
          variant="outlined"
          sx={{
            bgcolor: "#F0F0F0",
            color: "#000",
          }}
        />
      );
    case "Darkness":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/darkness.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#362848", color: "#fff" }}
        />
      );
    case "Dragon":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/dragon.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#F4D03F", color: "#000" }}
        />
      );
    case "Fairy":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/fairy.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#F28B8B", color: "#000" }}
        />
      );
    case "Fighting":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/fighting.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#D35400", color: "#000" }}
        />
      );
    case "Fire":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/fire.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#FF6347", color: "#000" }}
        />
      );
    case "Grass":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/grass.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#4CAF50", color: "#000" }}
        />
      );
    case "Lightning":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/lightning.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#F7CA18", color: "#000" }}
        />
      );
    case "Metal":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/metal.png" />}
          label={types}
          variant="outlined"
          sx={{
            bgcolor: "#B0BEC5",
            color: "#000",
          }}
        />
      );
    case "Psychic":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/psychic.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#9B59B6", color: "#000" }}
        />
      );
    case "Water":
      return (
        <Chip
          avatar={<Avatar alt={types} src="/assets/icons/water.png" />}
          label={types}
          variant="outlined"
          sx={{ bgcolor: "#4A90E2", color: "#000" }}
        />
      );
    default:
      return <Chip label="Neutral" variant="outlined" />;
  }
}

export function PokemonCard({
  name = "",
  types = [""],
  rarity = "N/A",
  image = "false",
  cardItem = undefined,
}: ICardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);


  return (
    <Card
      sx={{
        width: "100%",
        border: "2px solid #D4D7DE",
        borderRadius: 2,
        cursor: "pointer",
        overflow: "hidden",
        "&:hover": {
          border: "2px solid red",
          transition: 'all 0.2s ease-in-out',
        }
      }}
      onClick={handleOpen}
    >
      <CardMedia
        component={"img"}
        sx={{
          height: 240,
          bgcolor: "lightgray",
          objectFit: "contain",
        }}
        image={image}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1,
          justifyContent: "space-between",
          padding: "8px 12px",
        }}
      >
        {/* Nome */}
        <Typography variant="subtitle1" fontWeight="bold" textAlign={'center'}>
          {name}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, }}>

        {types.map((i) => (
          <TypesList key={i} types={i} /> 
        ))}
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", }}
        >
          {rarity}
        </Typography>
        <ModalPokemonDetail openModal={open} handleOpen={handleOpen} infoPokemon={cardItem}/>
        {/* </Grid> */}
      </CardContent>
    </Card>
  );
}
