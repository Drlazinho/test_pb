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
  hp?: string
}

export function PokemonCard({
  name = "",
  types = [""],
  rarity = "N/A",
  image = "false",
  cardItem = undefined,
  hp = ""
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
          position: "relative",
          overflow: "hidden",
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
        <Box sx={{
          width: 100,
          height: 100,
          bgcolor: '#c07878',
          position: 'absolute',
          top: 70,
          right: -40,
          borderRadius: 25
        }}>
            <Typography textAlign={'center'} sx={{ position: 'absolute', left: 25, top: 10}}><span style={{ fontSize: '1.25rem', fontWeight: "bold"}}> {hp}</span> <br /> <span style={{ fontSize: '.875rem' }}>Hp.</span></Typography>
        </Box>
        <ModalPokemonDetail openModal={open} handleOpen={handleOpen} infoPokemon={cardItem}/>
        {/* </Grid> */}
      </CardContent>
    </Card>
  );
}
