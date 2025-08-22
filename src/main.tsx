import { client } from "@/api/query.client.ts";
import { ChakraCustomProvider } from "@/components/chakra/provider.tsx";
import { router } from "@/router.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ChakraCustomProvider>
        <RouterProvider router={router} />
      </ChakraCustomProvider>
    </QueryClientProvider>
  </StrictMode>
);
