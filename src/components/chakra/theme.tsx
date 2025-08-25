import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
    semanticTokens: {
      colors: {
        primary: {
          value: {
            _light: "pink",
            _dark: "blue",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
