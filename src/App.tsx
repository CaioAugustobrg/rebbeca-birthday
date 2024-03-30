import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import AppRouter from "./routes/index.tsx";
import GlobalStyles from "./styles/globalStyles.ts";

function App() {
  return (
    <ChakraProvider   theme={DarkMode} >
      <AppRouter />
      <GlobalStyles />
    </ChakraProvider>
  );
}

export default App;