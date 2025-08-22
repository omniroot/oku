import { CONSTS } from "@/shared/consts.ts";
import { useAuthStore } from "@/stores/auth.store.ts";
import { HStack, Text } from "@chakra-ui/react";

export const ProfileButton = () => {
  const { isAuth } = useAuthStore();

  return (
    <HStack
      bg={"bg.subtle"}
      onClick={() => window.open(CONSTS.OAUTH_URL, "_self")}
    >
      {isAuth ? <Text>Authorizated</Text> : <>Authorizate</>}
    </HStack>
  );
};
