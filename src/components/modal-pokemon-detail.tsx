import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PokemonCardProps } from "../types/pokemon-card";
import { CardMedia, Divider } from "@mui/material";
import { IconTypesList } from "./icon-types-list";
import { motion } from "motion/react";

interface IModalProps {
  openModal: boolean;
  infoPokemon?: PokemonCardProps;
  handleOpen: () => void;
}

export default function ModalPokemonDetail({
  openModal,
  handleOpen,
  infoPokemon,
}: IModalProps) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
        component={motion.div}
        animate={{ scale: [0, 1.02, 1] }}
        transition={{
          duration: 0.6,
          ease: "easeInOut", 
        }}
          sx={{
            position: "absolute",
            top: "10%",
            left:{xs: "5%", md: "6%", lg: "15%", xl: "22%"},
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sx: "80%" },
            maxWidth: "1000px",
            height: { xs: "80%" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            color: "text.primary",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              color: "#ff0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              paddingBlock: 2,
              paddingInline: 4,
              marginBottom: {xs: "4px", md: 0},
              fontWeight: "bold",
              background: "#f00",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                flex: 1,
              }}
            >
              <Typography
                component="h2"
                sx={{
                  typography: { xs: "body1", md: "h6" },
                }}
              >
                {" "}
                {infoPokemon?.name} | {infoPokemon?.supertype} -{" "}
                {infoPokemon?.subtypes}
              </Typography>
              {infoPokemon?.types?.map((i) => (
                <IconTypesList key={i} types={i} />
              ))}
            </Box>

            <Typography
              id="modal-modal-title"
              component="p"
              sx={{
                color: "#ff0",
              }}
            >
              {infoPokemon?.hp} HP <br /> {"Lv. " + infoPokemon?.level || ""}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <CardMedia
              component={"img"}
              sx={{
                height: { xs: 280, md: 500 },
                width: { xs: 200, md: 380 },
                bgcolor: "lightgray",
                objectFit: "contain",
              }}
              image={infoPokemon?.images.large}
            />
            {/* Descriçção */}
            <Box
              sx={{
                flex: 1,
                padding: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #808080",
                    display: "flex",
                    padding: 2,
                    gap: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography>Weaknesses</Typography>
                  {infoPokemon?.weaknesses?.map((i) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <IconTypesList types={i.type} />
                      <Typography>{i.value}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    border: "1px solid #808080",
                    display: infoPokemon?.resistances ? "flex" : "none",

                    padding: 2,
                    gap: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography>Resistances</Typography>
                  {infoPokemon?.resistances?.map((i) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <IconTypesList types={i.type} />
                      <Typography>{i.value}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    border: "1px solid #808080",
                    display: infoPokemon?.retreatCost ? "flex" : "none",
                    padding: 2,
                    gap: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography>Retreat Cost</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      gap: 1.5,
                    }}
                  >
                    {infoPokemon?.retreatCost?.map((i) => (
                      <IconTypesList types={i} />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{
                  display: infoPokemon?.abilities ? "flex" : "none",
                }}
              >
                Abilities
              </Typography>
              {infoPokemon?.abilities?.map((i) => (
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {i.type} | {i.name}
                  </Typography>
                  <Typography
                    sx={{
                      marginBlock: 1,
                    }}
                  >
                    {i.text}
                  </Typography>
                </Box>
              ))}

              <Divider
                sx={{
                  display: infoPokemon?.abilities ? "flex" : "none",
                }}
              />
              <Typography variant="subtitle1">Attacks</Typography>
              {infoPokemon?.attacks?.map((i) => (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 1,
                      flexDirection: "row",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {i.cost.map((a) => (
                        <IconTypesList types={a} size={20} />
                      ))}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {i.name}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        display: i.damage ? "flex" : "none",
                      }}
                      variant="subtitle1"
                    >
                      {i.damage} ⚔
                    </Typography>
                  </Box>
                  <Typography>{i.text}</Typography>
                </Box>
              ))}
              <Divider
                sx={{
                  marginBlock: 2,
                }}
              />
              <Typography>
                Rarity:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {infoPokemon?.rarity}
                </span>
              </Typography>
            </Box>
          </Box>

          <Button
            onClick={handleOpen}
            variant="contained"
            color="error"
            sx={{
              width: "100%",
            }}
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
