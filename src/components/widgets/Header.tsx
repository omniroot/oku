import { ProfileButton } from "@/components/business/ProfileButton.tsx";
import { useAuthStore } from "@/stores/auth.store.ts";
import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { IconChevronDown, IconList, IconSettings } from "@tabler/icons-react";

export const Header = () => {
  const { isAuth } = useAuthStore();
  return (
    <HStack w="100%" justifyContent={"space-between"} asChild>
      <header>
        <div>
          <IconButton variant={"ghost"}>
            <IconList />
          </IconButton>
        </div>

        <div>
          <ProfileButton />
        </div>
      </header>
    </HStack>
  );
};
