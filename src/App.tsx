import { QueryClientProvider } from "@tanstack/react-query";
import { Principal } from "./page/principal";
import { queryClient } from "./lib/react-query";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Principal />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
