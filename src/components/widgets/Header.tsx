import { ProfileQuickActions } from "@/components/business/ProfileQuickActions.tsx";
import { useAuthStore } from "@/stores/auth.store.ts";
import { HStack, IconButton } from "@chakra-ui/react";
import { IconList } from "@tabler/icons-react";

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
          <ProfileQuickActions />
        </div>
      </header>
    </HStack>
  );
};
