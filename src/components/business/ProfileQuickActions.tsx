import { ProfileButton } from "@/components/business/ProfileButton.tsx";
import { HStack } from "@chakra-ui/react";

export const ProfileQuickActions = () => {
  return (
    <HStack p={"8px"} gap={"4px"} borderRadius={"64px"} bg={"#121212"}>
      <ProfileButton />
    </HStack>
  );
};
