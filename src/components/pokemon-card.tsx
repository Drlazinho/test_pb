import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { PokemonCardProps } from '../types/pokemon-card'
import { useState } from 'react'
import ModalPokemonDetail from './modal-pokemon-detail'
import { IconTypesList } from './icon-types-list'

interface ICardProps {
  cardItem?: PokemonCardProps | undefined
  name?: string
  types?: string[]
  rarity?: string
  image?: string
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
          <IconTypesList key={i} types={i} useChip /> 
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
