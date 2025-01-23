import { Avatar, Chip } from "@mui/material";

export interface TypesListProps {
  types: string | number;
  size?: number;
  useChip?: boolean;
}

const typeData: Record<
  string,
  { icon: string; bgColor: string; textColor: string }
> = {
  Colorless: { icon: "/assets/icons/colorless.png", bgColor: "#F0F0F0", textColor: "#000" },
  Darkness: { icon: "/assets/icons/darkness.png", bgColor: "#362848", textColor: "#fff" },
  Dragon: { icon: "/assets/icons/dragon.png", bgColor: "#F4D03F", textColor: "#000" },
  Fairy: { icon: "/assets/icons/fairy.png", bgColor: "#F28B8B", textColor: "#000" },
  Fighting: { icon: "/assets/icons/fighting.png", bgColor: "#D35400", textColor: "#000" },
  Fire: { icon: "/assets/icons/fire.png", bgColor: "#FF6347", textColor: "#000" },
  Grass: { icon: "/assets/icons/grass.png", bgColor: "#4CAF50", textColor: "#000" },
  Lightning: { icon: "/assets/icons/lightning.png", bgColor: "#F7CA18", textColor: "#000" },
  Metal: { icon: "/assets/icons/metal.png", bgColor: "#B0BEC5", textColor: "#000" },
  Psychic: { icon: "/assets/icons/psychic.png", bgColor: "#9B59B6", textColor: "#000" },
  Water: { icon: "/assets/icons/water.png", bgColor: "#4A90E2", textColor: "#000" },
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
