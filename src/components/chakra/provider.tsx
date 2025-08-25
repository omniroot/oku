"use client";

import { system } from "@/components/chakra/theme.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
// import { theme } from "~/theme/index.ts";

export function ChakraCustomProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
