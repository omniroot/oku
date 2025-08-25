import { getWhoamiOptions } from "@/api/shikimori.ts";
import { HStack, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export const ProfileButton = () => {
  const { data: user } = useQuery(getWhoamiOptions());
  console.log(user);

  return (
    <HStack>
      <Image
        src={user?.image.x160}
        w={"32px"}
        h={"32px"}
        borderRadius={"50%"}
      />
    </HStack>
  );
};
