import { Settings } from '@mui/icons-material'
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  useColorScheme,
} from "@mui/material";
import { useState } from "react";

export function ThemeContextModal() {
  const { mode, setMode } = useColorScheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  if (!mode) {
    return null;
  }

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "background.default",
    color: "text.primary",
    borderRadius: 1,
    p: 3,
    minHeight: "56px",
    gap: 2,
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        color="inherit"
        aria-label="Configurações de tema"
      >
        <Settings />
      </IconButton>{" "}
      <Modal
        keepMounted
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-theme"
        aria-describedby="modal-theme"
      >
        <FormControl sx={styleModal}>
          <FormLabel id="theme-toggle" sx={{ textAlign: "center" }}>
            Tema
          </FormLabel>
          <RadioGroup
            aria-labelledby="theme-toggle"
            name="theme-toggle"
            row
            value={mode}
            onChange={(event) =>
              setMode(event.target.value as "system" | "light" | "dark")
            }
          >
            <FormControlLabel
              value="system"
              control={<Radio />}
              label="Sistema"
            />
            <FormControlLabel value="light" control={<Radio />} label="Claro" />
            <FormControlLabel value="dark" control={<Radio />} label="Escuro" />
          </RadioGroup>
          <Button onClick={handleOpen} variant="text" color="success">
            Fechar
          </Button>
        </FormControl>
      </Modal>
    </>
  );
}
