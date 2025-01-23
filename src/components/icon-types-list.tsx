import { Avatar, Chip } from "@mui/material";
import colorlesIcon from "./../assets/icons/colorless.png";
import darknessIcon from "./../assets/icons/darkness.png";
import dragonIcon from "./../assets/icons/dragon.png";
import fairyIcon from "./../assets/icons/fairy.png";
import fightingIcon from "./../assets/icons/fighting.png";
import fireIcon from "./../assets/icons/fire.png";
import grassIcon from "./../assets/icons/grass.png";
import lightningIcon from "./../assets/icons/lightning.png";
import metalIcon from "./../assets/icons/metal.png";
import psychicIcon from "./../assets/icons/psychic.png";
import waterIcon from "./../assets/icons/water.png";


export interface TypesListProps {
  types: string | number;
  size?: number;
  useChip?: boolean;
}

const typeData: Record<
  string,
  { icon: string; bgColor: string; textColor: string }
> = {
  Colorless: { icon: colorlesIcon, bgColor: "#F0F0F0", textColor: "#000" },
  Darkness: { icon: darknessIcon, bgColor: "#362848", textColor: "#fff" },
  Dragon: { icon: dragonIcon, bgColor: "#F4D03F", textColor: "#000" },
  Fairy: { icon: fairyIcon, bgColor: "#F28B8B", textColor: "#000" },
  Fighting: { icon: fightingIcon, bgColor: "#D35400", textColor: "#000" },
  Fire: { icon: fireIcon, bgColor: "#FF6347", textColor: "#000" },
  Grass: { icon: grassIcon, bgColor: "#4CAF50", textColor: "#000" },
  Lightning: { icon: lightningIcon, bgColor: "#F7CA18", textColor: "#000" },
  Metal: { icon: metalIcon, bgColor: "#B0BEC5", textColor: "#000" },
  Psychic: { icon: psychicIcon, bgColor: "#9B59B6", textColor: "#000" },
  Water: { icon: waterIcon, bgColor: "#4A90E2", textColor: "#000" },
};

export function IconTypesList({ types, size = 30, useChip = false }: TypesListProps) {
  const typeInfo = typeData[types];
  if (!typeInfo) {
    return useChip ? <Chip label="Neutral" variant="outlined" /> : null;
  }

  const { icon, bgColor, textColor } = typeInfo;

  if (useChip) {
    return (
      <Chip
        avatar={<Avatar alt={types.toString()} src={icon} />}
        label={types}
        variant="outlined"
        sx={{ bgcolor: bgColor, color: textColor }}
      />
    );
  }

  return <Avatar alt={types.toString()} src={icon} sx={{ width: size, height: size }} />;
}
