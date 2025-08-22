import { shikimori } from "@/api/shikimori.ts";
import { rootRoute } from "@/router.tsx";
import { Button } from "@chakra-ui/react";
import { createRoute } from "@tanstack/react-router";

export const HomePage = () => {
  return (
    <>
      home page
      <Button onClick={() => shikimori.auth.whoami()}>login</Button>
    </>
  );
};
