import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const MyContext = createContext<{
  pageState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
  valState: object;
  setValState: React.Dispatch<React.SetStateAction<object>>;
  pState: number;
  setPState: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [pageState, setPageState] = useState<number>(0);
  const [valState, setValState] = useState<object>("");
  const [pState, setPState] = useState<number>(0);

  return (
    <ChakraProvider>
      <MyContext.Provider value={{ pageState, setPageState, valState, setValState, pState, setPState }}>
        <Component {...pageProps} />
      </MyContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
